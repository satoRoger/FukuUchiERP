import { isUndefined } from "@/common/utility";
import TimecardDTO from "@/domain/attendanceManagement/dto/dataStructure/timecardDto";
import Employee from "@/domain/attendanceManagement/employee/employee";
import IsEmployeePunchTimecard from "@/domain/attendanceManagement/service/isEmployeePunchTimecard";
import Timecard from "@/domain/attendanceManagement/timecard/timecard";
import TimecardRepository from "@/domain/attendanceManagement/timecard/timecardRepository";
import TimecardSearchResult from "@/domain/attendanceManagement/timecard/timecardSearchResult";
import { time } from "console";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class RepositoryOnMemory implements TimecardRepository {
  private timecardArray: Array<Timecard>;

  save: (timecard: Timecard) => Promise<Timecard> = (timecard) => {
    return new Promise((resolve, reject) => {
      this.timecardArray.push(timecard);
      return timecard;
    });
  };

  findAll: (employee: Employee) => Promise<TimecardSearchResult> = (
    employee
  ) => {
    return new Promise((resolve, reject) => {
      this.timecardArray.filter((timecard) => {
        return new IsEmployeePunchTimecard(employee, timecard).isPunch();
      }).map(timecard=>{

      });
    });
  };

  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardSearchResult>;
}
