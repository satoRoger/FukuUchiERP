import EntityFactory from "../../src/entity/entityFactory";
import Timecard from "../../src/entity/timecard/Timecard";
import CardType from "../../src/valueObject/cardtype";
import Coordinate from "../../src/valueObject/coordinate";
import Employee from "../../src/entity/employee/employee";
import { isCoordinate } from "../../src/service/utility/typeGuard";
import { DateTime } from "luxon";

describe("timecard", () => {
  let punchDate: DateTime;
  let employee: Employee;
  let coordinate: Coordinate;
  let cardType: CardType;
  let timecard: Timecard;

  beforeEach(() => {
    employee = new EntityFactory().employee().createByRowId("test01");
    punchDate = DateTime.fromISO("2020-10-10T05:05:05");
    coordinate = new Coordinate(20, 20);
    cardType = CardType.Attendance;
    timecard = new Timecard(employee, cardType, punchDate, coordinate);
  });

  test("getCoordinate", () => {
    if (!timecard.hasCoordinate()) {
      expect(timecard.getCoordinate()).toBe(undefined);
    }
    if (timecard.hasCoordinate()) {
      expect(
        (timecard.getCoordinate() as Coordinate).equal(
          timecard.getCoordinate() as Coordinate
        )
      ).toBe(true);
    }
  });
  test("getEmployeeId", () => {
    expect(timecard.punchEmployeeId().equal(employee.getId())).toBe(true);
  });
  test("isAttendance", () => {
    expect(timecard.isAttendance()).toBe(true);
    expect(timecard.isLeavework()).toBe(false);
    expect(timecard.isTakebreak()).toBe(false);
    expect(timecard.isEndbreak()).toBe(false);
  });
  test("isPunchedAfter", () => {
    expect(timecard.isPunchedAfter(DateTime.fromISO("2020-10-10T04:05:05"))).toBe(true);
    expect(timecard.isPunchedAfter(DateTime.fromISO("2020-10-10T06:05:05"))).toBe(true);
    expect(timecard.isPunchedAfter(DateTime.fromISO("2020-10-14T06:05:05"))).toBe(
      false
    );
    expect(timecard.isPunchedAfter(DateTime.fromISO("2020-10-10T05:05:05"))).toBe(true);
  });
  test("isPunchedBefore", () => {
    expect(timecard.isPunchedBefore(DateTime.fromISO("2020-10-10T04:05:05"))).toBe(
      false
    );
    expect(timecard.isPunchedBefore(DateTime.fromISO("2020-10-06T04:05:05"))).toBe(
      false
    );
    expect(timecard.isPunchedBefore(DateTime.fromISO("2020-10-14T04:05:05"))).toBe(
      true
    );
    expect(timecard.isPunchedBefore(DateTime.fromISO("2020-10-05T04:05:05"))).toBe(
      true
    );
  });
});
