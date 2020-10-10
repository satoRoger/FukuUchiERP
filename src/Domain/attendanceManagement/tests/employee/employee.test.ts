import Types from "@/di/types";
import { inject } from "inversify";
import Employee from "../../employee/employee";
import { EmployeeId } from "../../timecard/valueObjects";
import Timecard from "../../timecard/timecard";
import TimecardRepository from '../../timecard/timecardRepository';
import container from "@/di/inversify.config";

describe("employee", (): void => {
  test("EmployeIdが正しく取得できるか", () => {
    const employeeId = "test01";
    const employee = new Employee(new EmployeeId(employeeId));
    expect(employee.getId()).toBe(employeeId);
  });

  test("正しく出勤できるか", () => {
    const employeeId = "test01";
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(Types.TimecardRepository);

  });
});
