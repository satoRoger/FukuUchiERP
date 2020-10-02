import EmployeeId from "./EmployeeId";

export default class Employee {
  readonly id: EmployeeId;
  constructor(id: EmployeeId) {
    this.id = id;
  }
  
}
