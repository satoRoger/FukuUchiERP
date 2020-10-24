import { DateTime } from "luxon";
import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Employee from "../employee/employee";
import logger from "../../../../../util/logger/logger";

export default class Timecard {
  constructor(
    private employee: Employee,
    private cardType: CardType,
    private punchDate: DateTime,
    private coordinateValue?: Coordinate
  ) {}

  get coordinate(): Coordinate | undefined {
    if (this.hasCoordinate()) {
      return this.coordinateValue as Coordinate;
    } else {
      return undefined;
    }
  }

  punchEmployeeId(): EmployeeId {
    return this.employee.id;
  }

  isPunchedAfter(date: DateTime): boolean {
    return date <= this.punchDate;
  }
  isPunchedBefore(date: DateTime): boolean {
    return this.punchDate <= date;
  }

  hasCoordinate(): boolean {
    return this.coordinateValue != undefined;
  }
  getPunchDate(): DateTime {
    return this.punchDate;
  }

  isAttendance(): boolean {
    return this.cardType === CardType.Attendance;
  }
  isLeavework(): boolean {
    return this.cardType === CardType.Leavework;
  }
  isTakebreak(): boolean {
    return this.cardType === CardType.Takebreak;
  }
  isEndbreak(): boolean {
    return this.cardType === CardType.Endbreak;
  }
}
