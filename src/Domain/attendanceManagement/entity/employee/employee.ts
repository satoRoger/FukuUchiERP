import PunchAction from "../../punch/punchAction";
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

  punchTimecard: (action: PunchAction) => Promise<Timecard> = (action) => {
    return new Promise<Timecard>(() => {});
  };
}
