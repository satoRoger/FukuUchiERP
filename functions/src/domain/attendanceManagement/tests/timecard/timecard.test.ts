import Timecard from "../../src/entity/timecard/Timecard";
import CardType from "../../src/valueObject/cardtype";
import Coordinate from "../../src/valueObject/coordinate";
import Employee from "../../src/entity/employee/employee";
import { isCoordinate } from "../../src/service/utility/typeGuard";
import { DateTime } from "luxon";
import EmployeeFactory from "../../src/entity/employee/employeeFactory";

describe("timecard", () => {
  let punchDate: DateTime;
  let employee: Employee;
  let coordinate: Coordinate;
  let cardType: CardType;
  let timecard: Timecard;

  beforeEach(() => {
    employee = new EmployeeFactory().createByRowId("test01");
    punchDate = DateTime.fromISO("2020-10-10T05:05:05");
    coordinate = new Coordinate(20, 20);
    cardType = CardType.Attendance;
    timecard = new Timecard(employee, cardType, punchDate, coordinate);
  });

  test("getCoordinate", () => {
    if (!timecard.hasCoordinate) {
      expect(timecard.coordinate).toBe(undefined);
    }
    if (timecard.hasCoordinate) {
      expect(
        (timecard.coordinate as Coordinate).equal(
          timecard.coordinate as Coordinate
        )
      ).toBe(true);
    }
  });
  test("getEmployeeId", () => {
    expect(timecard.punchEmployeeId.equal(employee.id)).toBe(true);
  });
  test("isAttendance", () => {
    expect(timecard.attendance).toBe(true);
    expect(timecard.leavework).toBe(false);
    expect(timecard.takebreak).toBe(false);
    expect(timecard.endbreak).toBe(false);
  });
});
