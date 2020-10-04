import Timecard from "./Timecard";
import Employee from "../Employee/Employee";

export default interface ITimecardRepository {
  save(timecard: Timecard);
  findAll(employee: Employee);
  findWithDuration(employee: Employee, from: Date, to: Date);
}
