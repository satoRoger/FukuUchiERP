import "reflect-metadata";
import Employee from "../../src/entity/employee/employee";
import PunchActionFactory from "../../src/punch/punchActionFactory";
import PunchSpecificationFactory from "../../src/punch/punchSpecificationFactory";
import EntityEquivalent from "../../src/service/entityEquivalent";
import Coordinate from "../../src/valueObject/coordinate";
import EmployeeId from "../../src/valueObject/employeeId";
import TimecardRepository from "../../src/repository/timecard/timecardRepository";
import { DateTime } from "luxon";
import Timecard from "../../src/entity/timecard/Timecard";
import Types from "../../../../util/di/types";
import container from "../../../../util/di/inversify.config";
import TimecardFactory from "../../src/entity/timecard/timecardFactory";

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
});
