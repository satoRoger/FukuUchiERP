import Employee from "../employee/employee";
import Timecard from "../timecard/timecard";
import IsEqualEmployee from "./isEqualEmployee";

export default class IsEmployeePunchTimecard {
  private employee: Employee;
  private timecard: Timecard;

  constructor(employee: Employee, timecard: Timecard) {
    this.employee = employee;
    this.timecard = timecard;
  }

  isPunch: () => boolean = () => {
    return new IsEqualEmployee(
      this.employee,
      this.timecard.punchEmployee()
    ).equal();
  };
}
