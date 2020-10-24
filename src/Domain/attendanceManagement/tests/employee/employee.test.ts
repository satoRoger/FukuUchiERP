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

const repository = container.get<TimecardRepository>(Types.TimecardRepository);

function EmployeeAttend(
  employee: Employee,
  punchDate: DateTime,
  coordinate: Coordinate
): Promise<Timecard> {
  const specification = new PunchSpecificationFactory().getAttendance(
    repository
  );

  const action = new PunchActionFactory().actionAttendance(
    specification,
    punchDate,
    coordinate
  );
  return employee.punchTimecard(action);
}

function EmployeeLeavework(
  employee: Employee,
  punchDate: DateTime,
  coordinate: Coordinate
): Promise<Timecard> {
  const specification = new PunchSpecificationFactory().getLeavework(
    repository
  );

  const action = new PunchActionFactory().actionLeavework(
    specification,
    punchDate,
    coordinate
  );
  return employee.punchTimecard(action);
}

function EmployeeTakebreak(
  employee: Employee,
  punchDate: DateTime,
  coordinate: Coordinate
): Promise<Timecard> {
  const specification = new PunchSpecificationFactory().getTakebreak(
    repository
  );

  const action = new PunchActionFactory().actionTakebreak(
    specification,
    punchDate,
    coordinate
  );
  return employee.punchTimecard(action);
}

function EmployeeEndbreak(
  employee: Employee,
  punchDate: DateTime,
  coordinate: Coordinate
): Promise<Timecard> {
  const specification = new PunchSpecificationFactory().getEndbreak(repository);

  const action = new PunchActionFactory().actionEndbreak(
    specification,
    punchDate,
    coordinate
  );
  return employee.punchTimecard(action);
}

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
    const id = employee.id;
    expect(id.equal(employeeId)).toBe(true);
  });
  test("出勤を行う", async () => {
    const timecard = await EmployeeAttend(employee, punchDate, coordinate);

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
    try {
      const attendTimecard = await EmployeeAttend(
        employee,
        punchDate,
        coordinate
      );
      await repository.save(attendTimecard);
      const leaveworkTimecard = await EmployeeLeavework(
        employee,
        punchDate.plus({ hour: 1 }),
        coordinate
      );

      expect(
        new EntityEquivalent().equalTimecard(
          leaveworkTimecard,
          new EntityFactory()
            .timecard()
            .createLeavework(employee, punchDate.plus({ hour: 1 }), coordinate)
        )
      ).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  });

  test("休憩を開始する", async () => {
    try {
      const attendTimecard = await EmployeeAttend(
        employee,
        punchDate,
        coordinate
      );
      await repository.save(attendTimecard);
      const takebreakTimecard = await EmployeeTakebreak(
        employee,
        punchDate.plus({ hour: 1 }),
        coordinate
      );

      expect(
        new EntityEquivalent().equalTimecard(
          takebreakTimecard,
          new EntityFactory()
            .timecard()
            .createTakebreak(employee, punchDate.plus({ hour: 1 }), coordinate)
        )
      ).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  });

  test("休憩を終了する", async () => {
    try {
      const attendTimecard = await EmployeeAttend(
        employee,
        punchDate,
        coordinate
      );
      await repository.save(attendTimecard);

      const takebreakTimecard = await EmployeeTakebreak(
        employee,
        punchDate.plus({ hour: 1 }),
        coordinate
      );

      await repository.save(takebreakTimecard);
      
      const endbreakTimecard = await EmployeeEndbreak(
        employee,
        punchDate.plus({ hour: 2 }),
        coordinate
      );

      expect(
        new EntityEquivalent().equalTimecard(
          endbreakTimecard,
          new EntityFactory()
            .timecard()
            .createEndbreak(employee, punchDate.plus({ hour: 2 }), coordinate)
        )
      ).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  });
});
