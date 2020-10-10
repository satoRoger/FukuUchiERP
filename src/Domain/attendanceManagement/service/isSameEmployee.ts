import Employee from "../employee/employee";
export default class IsSameEmployee {
  private employeeA: Employee;
  private employeeB: Employee;
  constructor(employeeA: Employee, employeeB: Employee) {
    this.employeeA = employeeA;
    this.employeeB = employeeB;
  }
  same: () => boolean = () => {
    return this.employeeA.getId().id() === this.employeeB.getId().id();
  };
}
