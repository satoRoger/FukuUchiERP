import  Employee  from "../employee/employee";
import Timecard from "./timecard";
import { TimecardSearchResult } from "./timecardSearchResult";

export default interface TimecardRepository {
  save: (timecard: Timecard) => Promise<common.Result>;
  findAll: (employee: Employee) => Promise<TimecardSearchResult>;
  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardSearchResult>;

  tes: () => void;
}
