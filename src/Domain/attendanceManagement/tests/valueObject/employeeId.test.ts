import { errorMessageList } from "../../src/common/message";
import EmployeeId from "../../src/valueObject/employeeId";

describe("employeeIdのテスト", () => {
  test("idが正しく取得できるか", () => {
    const id = "test01";
    const employeeId = new EmployeeId(id);
    expect(employeeId.id()).toBe(id);
  });

  test("空文字idは拒否するか", () => {
    const id = "";
    expect(() => {
      new EmployeeId(id);
    }).toThrow(errorMessageList.LengthZeroIdIsProhivited);
  });
});
