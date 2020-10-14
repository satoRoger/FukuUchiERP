import EmployeeFactory from "./employee/employeeFactory";
import TimecardFactory from './timecard/timecardFactory';

export default class EntityFactory {
  employee: () => EmployeeFactory = () => {
    return new EmployeeFactory();
  };

  timecard: (
  ) => TimecardFactory = () => {
    return new TimecardFactory();
  };
}
