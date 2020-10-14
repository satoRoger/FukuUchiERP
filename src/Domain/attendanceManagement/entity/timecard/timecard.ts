import TimecardDto from "../../dto/dataStructure/timecardDto";
import TransferToDto from "../../dto/transfer/transferToDto";
import CardType from "../../valueObject/cardtype";
import { Coordinate } from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Employee from "../employee/employee";

export default class Timecard {
  constructor(
    private employee: Employee,
    private cardType: CardType,
    private punchDate: Date,
    private coodinate: Coordinate
  ) {}

  punchEmployeeId: () => EmployeeId = () => {
    return this.employee.getId();
  };

  isPunchedAfter: (date: Date) => boolean = (date) => {
    return this.punchDate <= date;
  };
  isPunchedBefore: (date: Date) => boolean = (date) => {
    return date <= this.punchDate;
  };

  getCoordinate: () => Coordinate = () => {
    return this.coodinate;
  };

  getPunchDate: () => Date = () => {
    return this.punchDate;
  };

  isAttendance: () => boolean = () => {
    return this.cardType === CardType.Attendance;
  };
  isLeaveWork: () => boolean = () => {
    return this.cardType === CardType.Leavework;
  };
  isTakebreak: () => boolean = () => {
    return this.cardType === CardType.Takebreak;
  };
  isEndbreak: () => boolean = () => {
    return this.cardType === CardType.Endbreak;
  };
}
