import { EmployeeId } from "../../timecard/valueObjects";

describe("employeeIdのテスト", (): void => {
  test("idが正しく取得できるか", () => {
    const id = "test01";
    const employeeId = new EmployeeId(id);
    expect(employeeId.getId()).toBe(id);
  });
  
  test("空文字idは拒否するか", () => {
    const id = "";
    expect(new EmployeeId(id)).toThrow(Error("長さ0のidは作成することができません。"));
  });
});
