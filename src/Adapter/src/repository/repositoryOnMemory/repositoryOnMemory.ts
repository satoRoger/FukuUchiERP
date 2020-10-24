import "reflect-metadata";
import { injectable } from "inversify";
import Employee from "@/domain/attendanceManagement/src/entity/employee/employee";
import Timecard from "@/domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "@/domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import IsEmployeePunchTimecard from "@/domain/attendanceManagement/src/service/isEmployeePunchTimecard";
import logger from "@/util/logger/logger";

@injectable()
export default class RepositoryOnMemory implements TimecardRepository {
  private timecardArray: Array<Timecard> = new Array<Timecard>();

  @logger.debug.traceMethodCall
  async save(timecard: Timecard): Promise<Timecard> {
    this.timecardArray.push(timecard);
    return timecard;
  }

  @logger.debug.traceMethodCall
  async searchByEmployee(employee: Employee): Promise<TimecardCollection> {
    return new TimecardCollection(
      this.timecardArray.filter((timecard) => {
        return new IsEmployeePunchTimecard(employee, timecard).isPunch();
      })
    );
  }
}
