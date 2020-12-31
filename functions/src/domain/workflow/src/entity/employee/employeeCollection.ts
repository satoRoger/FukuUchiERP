import EmployeeCollectionId from "../../valueObject/employeeCollectionId";
import Employee from "../employee/employee";

export default class EmployeeCollection implements Iterable<Employee> {
  constructor(
    private _id: EmployeeCollectionId,
    private _employeeCollection: Employee[] = new Array<Employee>()
  ) {}

  public get id() {
    return this._id;
  }
  add: (employee: Employee) => this = (employee) => {
    this._employeeCollection.push(employee);
    return this;
  };

  [Symbol.iterator](): Iterator<Employee> {
    return this._employeeCollection[Symbol.iterator]();
  }
}
