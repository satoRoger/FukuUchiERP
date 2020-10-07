import { isUndefined } from "@/common/utility";
import TimecardDTO from "@/domain/attendanceManagement/dto/timecardDto";
import Employee from "@/domain/attendanceManagement/employee/employee";
import Timecard from "@/domain/attendanceManagement/timecard/timecard";
import TimecardRepository from "@/domain/attendanceManagement/timecard/timecardRepository";
import TimecardSearchResult from "@/domain/attendanceManagement/timecard/timecardSearchResult";
import { injectable } from "inversify";
import "reflect-metadata";
import {
  ErrorMessage,
  errorMessageList,
  SuccessMessage,
  successMessageList
} from "../../common/message";
import { Failure, Result, Success } from "../../common/result";

@injectable()
export default class RepositoryOnMemory implements TimecardRepository {
  private timecardArray: Array<Timecard>;
  save: (
    timecard: Timecard
  ) => Promise<Result<SuccessMessage, ErrorMessage>> = (timecard) => {
    return new Promise<Result<SuccessMessage, ErrorMessage>>(
      (resolve, reject) => {
        this.timecardArray.push(timecard);

        if (isUndefined(timecard)) {
          const failure = new Failure<never, ErrorMessage>(
            errorMessageList.SampleErrorMessage
          );
          reject(failure);
        }
        const success = new Success<SuccessMessage, never>(
          successMessageList.SampleSuccessMessage
        );
        resolve(success);
      }
    );
  };

  findAll: (
    employee: Employee
  ) => Promise<Result<TimecardSearchResult, ErrorMessage>> = (employee) => {
    return new Promise<Result<TimecardSearchResult, ErrorMessage>>(
      (resolve, reject) => {
        if (isUndefined(employee)) {
          const failure = new Failure<never, ErrorMessage>(
            errorMessageList.SampleErrorMessage2
          );
          reject(failure);
        }
        const success = new Success<TimecardSearchResult, never>(
          new TimecardSearchResult("employeeId", [new TimecardDTO()])
        );
        resolve(success);
      }
    );
  };

  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<Result<TimecardSearchResult, ErrorMessage>> = (employee) => {
    return new Promise<Result<TimecardSearchResult, ErrorMessage>>(
      (resolve, reject) => {
        if (isUndefined(employee)) {
          const failure = new Failure<never, ErrorMessage>(
            errorMessageList.SampleErrorMessage2
          );
          reject(failure)
        }
        const success = new Success<TimecardSearchResult, never>(
          new TimecardSearchResult("employeeId", [new TimecardDTO()])
        );
        resolve(success);
      }
    );
  };
}
