import EmployeeId from "../../valueObject/employeeId";
import Employee from "./employee";

export default class EmployeeFactory {
  createByRowId: (id: string) => Employee = (id) => {
    return new Employee(new EmployeeId(id));
  };
}
