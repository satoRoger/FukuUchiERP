import "reflect-metadata";
import Employee from "../../src/entity/employee/employee";
import EntityFactory from "../../src/entity/entityFactory";
import PunchActionFactory from "../../src/punch/punchActionFactory";
import PunchSpecificationFactory from "../../src/punch/punchSpecification";
import EntityEquivalent from "../../src/service/entityEquivalent";
import Coordinate from "../../src/valueObject/coordinate";
import EmployeeId from "../../src/valueObject/employeeId";
import TimecardRepository from "../../src/repository/timecard/timecardRepository";
import container from "@/di/inversify.config";
import TestTypes from "@/di/testTypes";

describe("従業員", (): void => {
  const id = "test01";
  let employeeId: EmployeeId;
  let employee: Employee;
  let coordinate: Coordinate;
  let punchDate: Date;
  let repository: TimecardRepository;

  beforeEach(() => {
    employeeId = new EmployeeId(id);
    employee = new Employee(employeeId);
    coordinate = new Coordinate(20, 20);
    punchDate = new Date(2020, 10, 10, 5, 5, 5);
    repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );
  });

  test("従業員IDを取得", () => {
    const id = employee.getId();
    expect(id.equal(employeeId)).toBe(true);
  });
  test("出勤を行う", async () => {
    const specification = new PunchSpecificationFactory().getAttendance(
      repository
    );

    const action = new PunchActionFactory().actionAttendance(
      repository,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(specification, action);

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
    const specification = new PunchSpecificationFactory().getLeavework(
      repository
    );
    const action = new PunchActionFactory().actionLeavework(
      repository,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(specification, action);
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
    const specification = new PunchSpecificationFactory().getTakebreak(
      repository
    );
    const action = new PunchActionFactory().actionTakebreak(
      repository,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(specification, action);
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
    const specification = new PunchSpecificationFactory().getEndbreak(
      repository
    );
    const action = new PunchActionFactory().actionEndbreak(
      repository,
      punchDate,
      coordinate
    );
    const timecard = await employee.punchTimecard(specification, action);
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
