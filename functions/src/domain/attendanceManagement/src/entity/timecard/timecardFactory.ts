import Timecard from "./timecard";
import Coordinate from "../../valueObject/coordinate";
import Employee from "../employee/employee";
import CardType from "../../valueObject/cardtype";
import { DateTime } from "luxon";
import EmployeeId from "../../valueObject/employeeId";

export default class TimecardFactory {
  createAttendance: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Timecard = (employee, punchDate, coordinate) => {
    return this.create(employee, CardType.Attendance, punchDate, coordinate);
  };
  createLeavework: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Timecard = (employee, punchDate, coordinate) => {
    return this.create(employee, CardType.Leavework, punchDate, coordinate);
  };
  createTakebreak: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Timecard = (employee, punchDate, coordinate) => {
    return this.create(employee, CardType.Takebreak, punchDate, coordinate);
  };
  createEndbreak: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Timecard = (employee, punchDate, coordinate) => {
    return this.create(employee, CardType.Endbreak, punchDate, coordinate);
  };
  createTimecard(
    employeeId: EmployeeId,
    cardType: CardType,
    punchDate: DateTime,
    latitude?: number,
    longitude?: number
  ): Timecard {
    let coordinate = undefined;

    if (latitude && longitude) {
      coordinate = new Coordinate(latitude, longitude);
    }

    return new Timecard(
      new Employee(employeeId),
      cardType,
      punchDate,
      coordinate
    );
  }

  private create: (
    employee: Employee,
    cardType: CardType,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Timecard = (employee, cardType, punchDate, coordinate) => {
    return new Timecard(employee, cardType, punchDate, coordinate);
  };
}
