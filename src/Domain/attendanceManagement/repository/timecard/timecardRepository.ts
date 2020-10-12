import Employee from "../../entity/employee/employee";
import Timecard from "../../entity/timecard/Timecard";


export default interface TimecardRepository {
  save: (timecard: Timecard) => Promise<Timecard>;
  searchByEmployee: (employee: Employee) => Promise<TimecardSearchResult>;
  findWithDuration: (
    employee: Employee,
    from: Date,
    to: Date
  ) => Promise<TimecardSearchResult>;
}
