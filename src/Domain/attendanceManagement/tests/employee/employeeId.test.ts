import { EmployeeId } from "../../timecard/valueObjects";

describe("employeeIdのテスト", (): void => {
  test("EmployeIdが正しく取得できるか", () => {
    const id = "test01";
    const employeeId = new EmployeeId(id);
    expect(employeeId.getId()).toBe(id);
  });
});
