import "reflect-metadata";
import Employee from "../../entity/employee/employee";
import EntityEquivalent from "../../service/entityEquivalent";
import EmployeeId from "../../valueObject/employeeId";
import EntityFactory from "../../entity/entityFactory";
import Coordinate from "../../valueObject/coordinate";
import PunchActionFactory from "../../punch/punchActionFactory";
import PunchSpecificationFactory from "../../punch/punchSpecificationFactory";

describe("従業員", (): void => {
  const id = "test01";
  let employeeId: EmployeeId;
  let employee: Employee;
  let coordinate: Coordinate;
  let punchDate: Date;

  beforeEach(() => {
    employeeId = new EmployeeId(id);
    employee = new Employee(employeeId);
    coordinate = new Coordinate(20, 20);
    punchDate = new Date(2020, 10, 10, 5, 5, 5);
  });

  test("従業員IDを取得", () => {
    const id = employee.getId();
    expect(id.equal(employeeId)).toBe(true);
  });
  test("出勤を行う", async () => {
    const specification = new PunchSpecificationFactory().getAttendance();

    const action = new PunchActionFactory().actionAttendance(
      specification,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(action);

    expect(
      new EntityEquivalent().equalTimecard(
        timecard,
        new EntityFactory()
          .timecard()
          .createAttendance(employee, punchDate, coordinate)
      )
    ).toBe(true);
  });

  test("退勤を行う", async () => {
    const specification = new PunchSpecificationFactory().getLeavework();
    const action = new PunchActionFactory().actionLeavework(
      specification,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(action);
    expect(
      new EntityEquivalent().equalTimecard(
        timecard,
        new EntityFactory()
          .timecard()
          .createLeavework(employee, punchDate, coordinate)
      )
    ).toBe(true);
  });

  test("休憩を開始する", async () => {
    const specification = new PunchSpecificationFactory().getTakebreak();
    const action = new PunchActionFactory().actionTakebreak(
      specification,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(action);
    expect(
      new EntityEquivalent().equalTimecard(
        timecard,
        new EntityFactory()
          .timecard()
          .createTakebreak(employee, punchDate, coordinate)
      )
    ).toBe(true);
  });

  test("休憩を終了する", async () => {
    const specification = new PunchSpecificationFactory().getEndbreak();
    const action = new PunchActionFactory().actionEndbreak(
      specification,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(action);
    expect(
      new EntityEquivalent().equalTimecard(
        timecard,
        new EntityFactory()
          .timecard()
          .createEndbreak(employee, punchDate, coordinate)
      )
    ).toBe(true);
  });
});
