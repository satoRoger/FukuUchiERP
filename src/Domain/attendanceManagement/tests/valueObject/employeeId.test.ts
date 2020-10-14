
import { errorMessageList } from "../../../../common/message";
import EmployeeId from "../../valueObject/employeeId";

describe("employeeIdのテスト", (): void => {
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
