import Employee from "#/Domain/Timecard/Employee/Employee";
import Timecard from "#/Domain/Timecard/Timecard/Timecard";
import ITimecardRepository from "Domain/Timecard/Timecard/ITimecardRepository";

export default class DatabaseInFMemory implements ITimecardRepository {
  private timecardArray: Array<Timecard>;

  save(timecard: Timecard) {
    this.timecardArray.push(timecard);
  }
  findAll(employee: Employee) {
    return this.timecardArray;
  }
  findWithDuration(employee: Employee, from: Date, to: Date) {
    return this.timecardArray.filter((timecard) => {
      return timecard.isPunchedAfter(from) && timecard.isPunchedBefore(to);
    });
  }
}
