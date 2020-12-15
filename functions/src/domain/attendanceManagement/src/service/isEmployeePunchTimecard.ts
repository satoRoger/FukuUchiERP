import Employee from "../entity/employee/employee";
import Timecard from "../entity/timecard/Timecard";
import EntityEquivalent from "./entityEquivalent";

export default class IsEmployeePunchTimecard {
  private employee: Employee;
  private timecard: Timecard;

  constructor(employee: Employee, timecard: Timecard) {
    this.employee = employee;
    this.timecard = timecard;
  }

  isPunch(): boolean {
    return this.employee.id.equal(this.timecard.punchEmployeeId);
  }
}
