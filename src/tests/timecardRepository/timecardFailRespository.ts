import { ErrorMessage, errorMessageList } from "@/common/message";
import Employee from "@/domain/attendanceManagement/employee/employee";
import Timecard from "@/domain/attendanceManagement/timecard/timecard";
import TimecardSearchResult from "@/domain/attendanceManagement/timecard/timecardSearchResult";
import { injectable } from "inversify";
import TimecardRepository from "@/domain/attendanceManagement/timecard/timecardRepository";

@injectable()
export default class TimecardFailRepository implements TimecardRepository {
  save: (timecard: Timecard) => Promise<Timecard> = (timecard) => {
    return new Promise((_, reject) => {
      reject(errorMessageList.FailedSaveToRepository);
    });
  };

  findAll: (employee: Employee) => Promise<TimecardSearchResult> = (
    employee
  ) => {
    return new Promise((_, reject) => {
      reject(errorMessageList.FailedSaveToRepository);
    });
  };

  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardSearchResult> = (employee, from, to) => {
    return new Promise((_, reject) => {
      reject(errorMessageList.FailedSaveToRepository);
    });
  };
}
