import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Employee from "../employee/employee";

export default class Timecard {
  constructor(
    private employee: Employee,
    private cardType: CardType,
    private punchDate: Date,
    private coordinate?: Coordinate
  ) {}

  punchEmployeeId: () => EmployeeId = () => {
    return this.employee.getId();
  };

  isPunchedAfter: (date: Date) => boolean = (date) => {
    return date <= this.punchDate;
  };
  isPunchedBefore: (date: Date) => boolean = (date) => {
    return this.punchDate <= date;
  };

  hasCoordinate: () => boolean = () => {
    return this.coordinate != undefined;
  };
  getCoordinate: () => Coordinate = () => {
    return this.coordinate;
  };

  getPunchDate: () => Date = () => {
    return this.punchDate;
  };

  isAttendance: () => boolean = () => {
    return this.cardType === CardType.Attendance;
  };
  isLeavework: () => boolean = () => {
    return this.cardType === CardType.Leavework;
  };
  isTakebreak: () => boolean = () => {
    return this.cardType === CardType.Takebreak;
  };
  isEndbreak: () => boolean = () => {
    return this.cardType === CardType.Endbreak;
  };
}
