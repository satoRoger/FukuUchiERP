import "reflect-metadata";
import Employee from "../../src/entity/employee/employee";
import EntityFactory from "../../src/entity/entityFactory";
import PunchActionFactory from "../../src/punch/punchActionFactory";
import PunchSpecificationFactory from "../../src/punch/punchSpecificationFactory";
import EntityEquivalent from "../../src/service/entityEquivalent";
import Coordinate from "../../src/valueObject/coordinate";
import EmployeeId from "../../src/valueObject/employeeId";
import TimecardRepository from "../../src/repository/timecard/timecardRepository";
import container from "@/di/inversify.config";
import Types from "@/di/types";
import { DateTime } from "luxon";
import Timecard from "../../src/entity/timecard/Timecard";

describe("従業員", (): void => {
  const id = "test01";
  let employeeId: EmployeeId;
  let employee: Employee;
  let coordinate: Coordinate;
  let punchDate: DateTime;
  beforeEach(() => {
    employeeId = new EmployeeId(id);
    employee = new Employee(employeeId);
    coordinate = new Coordinate(20, 20);
    punchDate = DateTime.fromISO("2020-10-10");
  });

  test("従業員IDを取得", () => {
    const id = employee.getId();
    expect(id.equal(employeeId)).toBe(true);
  });
  test("出勤を行う", async () => {
    const repository = container.get<TimecardRepository>(Types.TimecardRepository);
    const specification = new PunchSpecificationFactory().getAttendance(
      repository
    );

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
    const repository = container.get<TimecardRepository>(Types.TimecardRepository);
    const specification = new PunchSpecificationFactory().getLeavework(
      repository
    );
    const action = new PunchActionFactory().actionLeavework(
      specification,
      punchDate,
      coordinate
    );
    employee
      .punchTimecard(action)
      .then((timecard) => {
        expect(
          new EntityEquivalent().equalTimecard(
            timecard,
            new EntityFactory()
              .timecard()
              .createLeavework(employee, punchDate, coordinate)
          )
        ).toBe(true);
      })
      .catch((error) => {
        throw new Error(error);
      });
  });

  test("休憩を開始する", async () => {
    const repository = container.get<TimecardRepository>(Types.TimecardRepository);
    const specification = new PunchSpecificationFactory().getTakebreak(
      repository
    );
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
    const repository = container.get<TimecardRepository>(Types.TimecardRepository);
    const specification = new PunchSpecificationFactory().getEndbreak(
      repository
    );
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
