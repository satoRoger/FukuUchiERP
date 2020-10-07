import  Employee  from "./employee";

export interface EmployeeFactory {
  create: () => Employee;
}
