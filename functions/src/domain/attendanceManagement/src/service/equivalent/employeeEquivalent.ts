import Employee from "../../entity/employee/employee";
export default class EmployeeEquivalent {
  constructor(private employeeA: Employee, private employeeB: Employee) {}
  equal(): boolean {
    return this.employeeA.id.equal(this.employeeB.id);
  }
}
