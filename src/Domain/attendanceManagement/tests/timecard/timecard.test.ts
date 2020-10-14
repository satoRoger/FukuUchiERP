import EntityFactory from "../../entity/entityFactory";
import Timecard from "../../entity/timecard/Timecard";
import CardType from "../../valueObject/cardtype";
import { Coordinate } from "../../valueObject/coordinate";
import EntityEquivalent from "../../service/entityEquivalent";

describe("timecard", () => {
  let punchDate;
  let employee;
  let coordinate;
  let cardType;
  let timecard;

  beforeEach(() => {
    employee = new EntityFactory().createEmployee("test01");
    punchDate = new Date(2020, 10, 10, 5, 5, 5);
    coordinate = new Coordinate(20, 20);
    cardType = CardType.Attendance;
    timecard = new Timecard(employee, cardType, punchDate, coordinate);
  });

  test("getCoordinate", () => {
    expect(timecard.getCoordinate().equal(coordinate)).toBe(true);
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
  test("isPunchAfter", () => {
    expect(timecard.isPunchAfter(new Date(2020, 10, 10, 4, 5, 5))).toBe(true);
    expect(timecard.isPunchAfter(new Date(2020, 10, 6, 5, 5, 5))).toBe(true);
    expect(timecard.isPunchAfter(new Date(2020, 10, 14, 4, 5, 5))).toBe(false);
    expect(timecard.isPunchAfter(new Date(2020, 10, 10, 5, 5, 5))).toBe(true);
  });
  test("isPunchBefore", () => {
    expect(timecard.isPunchBefore(new Date(2020, 10, 10, 4, 5, 5))).toBe(false);
    expect(timecard.isPunchBefore(new Date(2020, 10, 6, 5, 5, 5))).toBe(false);
    expect(timecard.isPunchBefore(new Date(2020, 10, 14, 4, 5, 5))).toBe(true);
    expect(timecard.isPunchBefore(new Date(2020, 10, 10, 5, 5, 5))).toBe(true);
  });
});
