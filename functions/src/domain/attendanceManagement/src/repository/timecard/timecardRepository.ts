import Employee from "../../entity/employee/employee";
import Timecard from "../../entity/timecard/Timecard";
import TimecardCollection from "../../entity/timecard/timecardCollection";
import { DateTime } from "luxon";

export default interface TimecardRepository {
  save: (timecard: Timecard) => Promise<Timecard>;
  searchByEmployee: (
    employee: Employee,
    from: DateTime,
    to: DateTime
  ) => Promise<TimecardCollection>;
}
