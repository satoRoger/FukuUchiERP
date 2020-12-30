import EmployeeId from "../../valueObject/employeeId";

export default class Employee {
  constructor(private _id: EmployeeId) {}

  public get id() {
    return this._id;
  }
}
