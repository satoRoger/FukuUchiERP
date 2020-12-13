import Employee from '../../../src/entity/employee/employee';
import EmployeeEquivalent from '../../../src/service/equivalent/employeeEquivalent';
import EmployeeId from '../../../src/valueObject/employeeId';
describe('従業員等価比較ロジック', () => {
  let employeeA: Employee;
  let employeeB: Employee;
  let employeeC: Employee;

  beforeAll(() => {
    employeeA = new Employee(new EmployeeId("test01"));
    employeeB = new Employee(new EmployeeId("test01"));
    employeeC = new Employee(new EmployeeId("test02"));
  })
  test('同じオブジェクトを評価', () => {
    expect(new EmployeeEquivalent(employeeA, employeeA).equal()).toBe(true);
    expect(new EmployeeEquivalent(employeeB, employeeB).equal()).toBe(true);
    expect(new EmployeeEquivalent(employeeC, employeeC).equal()).toBe(true);
  });

  test('同じIDを評価', () => {
    expect(new EmployeeEquivalent(employeeA, employeeB).equal()).toBe(true);
  });

  test('異なるIDを評価', () => {
    expect(new EmployeeEquivalent(employeeA, employeeC).equal()).toBe(false);
    expect(new EmployeeEquivalent(employeeB, employeeC).equal()).toBe(false);
  });
})
