import ApproverId from "../../valueObject/approverId";
import Approver from "./approver";

export default class EmployeeCollection implements Iterable<Approver> {
  constructor(
    private _id: ApproverId,
    private _employeeCollection: Approver[] = new Array<Approver>()
  ) {}

  public get id() {
    return this._id;
  }
  add: (employee: Approver) => this = (employee) => {
    this._employeeCollection.push(employee);
    return this;
  };

  [Symbol.iterator](): Iterator<Approver> {
    return this._employeeCollection[Symbol.iterator]();
  }
}
