import "reflect-metadata";
import { injectable } from "inversify";
import Employee from "@/domain/attendanceManagement/src/entity/employee/employee";
import Timecard from "@/domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "@/domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import IsEmployeePunchTimecard from "@/domain/attendanceManagement/src/service/isEmployeePunchTimecard";


@injectable()
export default class RepositoryOnMemory implements TimecardRepository {
  private timecardArray: Array<Timecard> = new Array<Timecard>();

  save: (timecard: Timecard) => Promise<Timecard> = (timecard) => {
    return new Promise((resolve, reject) => {
      this.timecardArray.push(timecard);
      return timecard;
    });
  };

  searchByEmployee: (employee: Employee) => Promise<TimecardCollection> = (
    employee
  ) => {
    return new Promise((resolve, reject) => {
      this.timecardArray.filter((timecard) => {
        return new IsEmployeePunchTimecard(employee, timecard).isPunch();
      }).map(timecard=>{

      });
    });
  };
}
