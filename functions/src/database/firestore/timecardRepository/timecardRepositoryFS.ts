import { injectable } from "inversify";
import { DateTime } from "luxon";
import Employee from "../../../domain/attendanceManagement/src/entity/employee/employee";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "../../../domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import admin from "../../../framework/firebase/adminInitialize";

@injectable()
export default class TimecardRepositoryGDB implements TimecardRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("timecards");
    this.reference = this.database.
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
    this.repository.get()
  }
}
