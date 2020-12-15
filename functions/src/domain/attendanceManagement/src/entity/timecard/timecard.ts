import { DateTime } from "luxon";
import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Employee from "../employee/employee";
import logger from "../../../../../util/logger/logger";

export default class Timecard {
  constructor(
    private _employee: Employee,
    private _cardType: CardType,
    private _punchDate: DateTime,
    private _coordinateValue?: Coordinate
  ) {}

  get coordinate(): Coordinate | undefined {
    if (this.hasCoordinate) {
      return this._coordinateValue as Coordinate;
    } else {
      return undefined;
    }
  }

  get punchEmployeeId(): EmployeeId {
    return this._employee.id;
  }

  get hasCoordinate(): boolean {
    return this._coordinateValue != undefined;
  }
  get punchDate(): DateTime {
    return this._punchDate;
  }

  get cardtype(): CardType {
    return this._cardType;
  }

  get attendance(): boolean {
    return this._cardType === CardType.Attendance;
  }
  get leavework(): boolean {
    return this._cardType === CardType.Leavework;
  }
  get takebreak(): boolean {
    return this._cardType === CardType.Takebreak;
  }
  get endbreak(): boolean {
    return this._cardType === CardType.Endbreak;
  }
}
