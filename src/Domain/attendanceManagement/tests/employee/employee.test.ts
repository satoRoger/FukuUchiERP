describe("employee", (): void => {
  test("EmployeIdが正しく取得できるか", () => {
    const employeeId = "test01";
    const employee = new Employee(new EmployeeId(employeeId));
    expect(employee.getId()).toBe(employeeId);
  });
});
