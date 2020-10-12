import EmployeeId from "../../valueObject/employeeId";
import Employee from "./employee";

export default class EmployeeFactory {
  create: (id: string) => Employee = (id) => {
    return new Employee(new EmployeeId(id));
  };
}
