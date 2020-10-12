import EmployeeId from "../../valueObject/employeeId";
import Timecard from "../timecard/Timecard";

export default class Employee {
  private id: EmployeeId;

  constructor(id: EmployeeId) {
    this.id = id;
  }

  getId: () => EmployeeId = () => {
    return this.id;
  };

  punchTimecard: (command: PunchCommand) => Promise<Timecard>;
}
