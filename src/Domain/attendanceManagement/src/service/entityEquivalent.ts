import Employee from "../entity/employee/employee";
import Timecard from "../entity/timecard/Timecard";
import EmployeeEquivalent from "./equivalent/employeeEquivalent";
import TimecardEquivalent from "./equivalent/timecardEquivalent";

export default class EntityEquivalent {
  equalEmployee: (a: Employee, b: Employee) => boolean = (a, b) => {
    return new EmployeeEquivalent(a, b).equal();
  };
  equalTimecard: (a: Timecard, b: Timecard) => boolean = (a, b) => {
    return new TimecardEquivalent(a, b).equal();
  }
}
