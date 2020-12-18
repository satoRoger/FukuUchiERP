import { injectable } from "inversify";
import { DateTime } from "luxon";
import Employee from "../../../domain/attendanceManagement/src/entity/employee/employee";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "../../../domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import admin from "../../../framework/firebase/adminInitialize";
import TimecardFactory from "../../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import EmployeeId from "../../../domain/attendanceManagement/src/valueObject/employeeId";
import { resolve } from "path";

@injectable()
export default class TimecardRepositoryFS implements TimecardRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("timecards");
  }

  async save(timecard: Timecard): Promise<Timecard> {
    await this.repository.add({
      cardtype: timecard.cardtype,
      latitude: timecard.coordinate?.latitude(),
      longitude: timecard.coordinate?.longitude(),
      punchDate: timecard.punchDate.toISO(),
      userId: `/users/${timecard.punchEmployeeId.value}`,
    });
    return timecard;
  }
  async search(
    employee?: Employee,
    from?: DateTime,
    to?: DateTime
  ): Promise<TimecardCollection> {
    let queryRepository:
      | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = this
      .repository;

    if (employee) {
      const userRef = this.database.collection("users").doc(employee.id.value);
      queryRepository = queryRepository.where("userId", "==", userRef);
    }
    if (from) {
      queryRepository = queryRepository.where(
        "punchDate",
        ">=",
        from.toJSDate()
      );
    }
    if (to) {
      queryRepository = queryRepository.where("punchDate", "<=", to.toJSDate());
    }
    const snapshot = await queryRepository.get();

    const result = snapshot.docs.map(async (doc) => {
      const userDoc = await doc.data().userId.get();
      return new TimecardFactory().createTimecard(
        new EmployeeId(userDoc.id),
        doc.data().cardType,
        DateTime.fromJSDate(doc.data().punchDate.toDate())
      );
    });
    
    return Promise.all(result).then((timecards) => {
      const collection = new TimecardCollection();
      for (let timecard of timecards) {
        collection.add(timecard);
      }
      return collection;
    });
  }
}
