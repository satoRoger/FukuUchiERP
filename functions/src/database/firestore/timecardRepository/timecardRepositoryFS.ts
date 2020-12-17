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
    employee: Employee,
    from: DateTime,
    to: DateTime
  ): Promise<TimecardCollection> {
    const collection = new TimecardCollection();
    /*
    this.repository
      .where("userId", "==", "/users/" + employee.id.value)
      .where("punchDate", ">=", from.toISO())
      .where("punchDate", "<=", to.toISO())
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          collection.add(
            new TimecardFactory().createTimecard(
              doc.data().userId.id,
              doc.data().cardType,
              doc.data().punchDate
            )
          );
        });
      });
    return collection;
    */
    console.log(57);
    const snapshot = await this.repository.get();
    console.log(59);
    const result = snapshot.docs.map(async (doc) => {
      console.log(61);
      const userDoc = await doc.data().userId.get();
      console.log(63);
      return new TimecardFactory().createTimecard(
        new EmployeeId(userDoc.id),
        doc.data().cardType,
        DateTime.fromJSDate(doc.data().punchDate.toDate())
      );
    });
    console.log(70);
    Promise.all(result).then((timecards) => {
      console.log(72);
      for (let timecard of timecards) {
        console.log(74);
        collection.add(timecard);
      }
      console.log(77);
    });
    console.log(79);
    return collection;
  }
}
