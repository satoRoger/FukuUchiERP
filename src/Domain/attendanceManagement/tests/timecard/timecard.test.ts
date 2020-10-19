import EntityFactory from "../../src/entity/entityFactory";
import Timecard from "../../src/entity/timecard/Timecard";
import CardType from "../../src/valueObject/cardtype";
import Coordinate from "../../src/valueObject/coordinate";
import Employee from '../../src/entity/employee/employee';


describe("timecard", () => {
  let punchDate:Date;
  let employee:Employee;
  let coordinate:Coordinate;
  let cardType:CardType;
  let timecard:Timecard;

  beforeEach(() => {
    employee = new EntityFactory().employee().createByRowId("test01");
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
  test("isPunchedAfter", () => {
    expect(timecard.isPunchedAfter(new Date(2020, 10, 10, 4, 5, 5))).toBe(true);
    expect(timecard.isPunchedAfter(new Date(2020, 10, 6, 5, 5, 5))).toBe(true);
    expect(timecard.isPunchedAfter(new Date(2020, 10, 14, 4, 5, 5))).toBe(false);
    expect(timecard.isPunchedAfter(new Date(2020, 10, 10, 5, 5, 5))).toBe(true);
  });
  test("isPunchedBefore", () => {
    expect(timecard.isPunchedBefore(new Date(2020, 10, 10, 4, 5, 5))).toBe(false);
    expect(timecard.isPunchedBefore(new Date(2020, 10, 6, 5, 5, 5))).toBe(false);
    expect(timecard.isPunchedBefore(new Date(2020, 10, 14, 4, 5, 5))).toBe(true);
    expect(timecard.isPunchedBefore(new Date(2020, 10, 10, 5, 5, 5))).toBe(true);
  });
});
