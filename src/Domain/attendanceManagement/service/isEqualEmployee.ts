import Employee from "../employee/employee";
export default class IsEqualEmployee {
  private employeeA: Employee;
  private employeeB: Employee;
  constructor(employeeA: Employee, employeeB: Employee) {
    this.employeeA = employeeA;
    this.employeeB = employeeB;
  }
  equal: () => boolean = () => {
    return this.employeeA.getId().id() === this.employeeB.getId().id();
  };
}
