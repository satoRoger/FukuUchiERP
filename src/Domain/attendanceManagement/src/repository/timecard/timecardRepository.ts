import Employee from "../../entity/employee/employee";
import Timecard from "../../entity/timecard/Timecard";
import TimecardCollection from "../../entity/timecard/timecardCollection";

export default interface TimecardRepository {
  save: (timecard: Timecard) => Promise<Timecard>;
  searchByEmployee: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardCollection>;
}
