import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import { inject } from "inversify";
import Types from "@/di/types";
import { DateTime, Duration } from "luxon";
import {
  errorMessageList,
} from "@/domain/attendanceManagement/src/common/message";
import { dayStart } from "../../common/utility";

export default class LeaveworkSpecification implements PunchSpecification {
  constructor(
    @inject(Types.TimecardRepository) private repository: TimecardRepository
  ) {}
  punchable: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Promise<boolean> = (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => {
    return new Promise(async (resolve, reject) => {
      const timecardCollection = await this.repository.searchByEmployee(
        employee,
        dayStart(punchDate),
        punchDate
      );

      if (
        0 <
        timecardCollection.filter((timecard) => timecard.isAttendance()).size()
      ) {
        resolve(true);
      } else {
        reject(errorMessageList.ProhiviteLeaveworkBeforeAttend);
      }
    });
  };
}
