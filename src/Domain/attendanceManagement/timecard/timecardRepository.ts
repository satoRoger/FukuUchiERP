import { ErrorMessage } from "@/common/message";
import { Result } from "@/common/result";
import Employee from "../employee/employee";
import TimecardSearchResult from "./timecardSearchResult";
import Timecard from "@/domain/attendanceManagement/timecard/timecard";

export default interface TimecardRepository {
  save: (timecard: Timecard) => Promise<Timecard>;
  findAll: (employee: Employee) => Promise<TimecardSearchResult>;
  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardSearchResult>;
}
