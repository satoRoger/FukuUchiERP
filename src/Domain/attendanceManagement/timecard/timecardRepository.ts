import { SuccessMessage, ErrorMessage } from "@/common/message";
import { Result } from "@/common/result";
import Employee from "../employee/employee";
import Timecard from "./timecard";
import TimecardSearchResult from "./timecardSearchResult";

export default interface TimecardRepository {
  save: (
    timecard: Timecard
  ) => Promise<Result<SuccessMessage, ErrorMessage>>;
  findAll: (
    employee: Employee
  ) => Promise<Result<TimecardSearchResult, ErrorMessage>>;
  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<Result<TimecardSearchResult, ErrorMessage>>;
}
