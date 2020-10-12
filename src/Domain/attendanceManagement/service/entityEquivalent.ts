import Employee from "../entity/employee/employee";
import EmployeeEquivalent from './equivalent/employeeEquivalent';

export default class EntityEquivalent {
  equalEmployee: (employeeA: Employee, employeeB: Employee) => boolean = (employeeA, employeeB) => {
    return new EmployeeEquivalent(employeeA,employeeB).equal()
  };
}
