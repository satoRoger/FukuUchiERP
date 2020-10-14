import Employee from "../entity/employee/employee";
import EmployeeEquivalent from './equivalent/employeeEquivalent';

export default class EntityEquivalent {
  equalEmployee: (a: Employee, b: Employee) => boolean = (a, b) => {
    return new EmployeeEquivalent(a,b).equal()
  };
  equalTimecard:(a:Timecard,)
}
