import Employee from "../employee/employee";
import Timecard from "../timecard/timecard";
import IsSameEmployee from "./isSameEmployee";

export default class IsEmployeePunchTimecard {
  private employee: Employee;
  private timecard: Timecard;

  constructor(employee: Employee, timecard: Timecard) {
    this.employee = employee;
    this.timecard = timecard;
  }

  isPunch: () => boolean = () => {
    return new IsSameEmployee(
      this.employee,
      this.timecard.punchEmployee()
    ).same();
  };
}
