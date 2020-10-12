import Employee from "./employee/employee";
import EmployeeFactory from "./employee/employeeFactory";
import Timecard from "./timecard/Timecard";

export default class EntityFactory {
  createEmployee: (id: string) => Employee = (id) => {
    return new EmployeeFactory().create(id);
  };

  createTimecard: () => Timecard;
}
