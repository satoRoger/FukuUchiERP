import "reflect-metadata";
import Employee from "@/domain/attendanceManagement/employee/employee";
import { EmployeeId } from "@/domain/attendanceManagement/timecard/valueObjects";
const employee: Employee = new Employee(new EmployeeId("ee"));
