import Timecard from "../../timecard/timecard";
import { Coordinate, CardType } from "../../timecard/valueObjects";
import BaseDto from "./baseDto";

export default class TimecardDto implements BaseDto {
  readonly employeeId?: string;
  readonly attendanceDate?: Date;
  readonly leaveWorkDate?: Date;
  readonly takeBreakDate?: Date;
  readonly endBreakDate?: Date;
  readonly attendanceCoodinate?: Coordinate;
  readonly leaveWorkCoordinate?: Coordinate;
  readonly takeBreakCoordinate?: Coordinate;
  readonly endBreakCoordinate?: Coordinate;

  constructor(
    employeeId: string,
    attendanceDate?: Date,
    leaveWorkDate?: Date,
    takeBreakDate?: Date,
    endBreakDate?: Date,
    attendanceCoodinate?: Coordinate,
    leaveWorkCoordinate?: Coordinate,
    takeBreakCoordinate?: Coordinate,
    endBreakCoordinate?: Coordinate
  ) {
    this.employeeId = employeeId;
    this.attendanceDate = attendanceDate;
    this.leaveWorkDate = leaveWorkDate;
    this.takeBreakDate = takeBreakDate;
    this.endBreakDate = endBreakDate;
    this.attendanceCoodinate = attendanceCoodinate;
    this.leaveWorkCoordinate = leaveWorkCoordinate;
    this.takeBreakCoordinate = takeBreakCoordinate;
    this.endBreakCoordinate = endBreakCoordinate;
  }

  equal: (dto: TimecardDto) => boolean = (dto: TimecardDto) => {
    let isEqual = true;
    isEqual &&= this.attendanceDate.getTime() == dto.attendanceDate.getTime();
    isEqual &&= this.leaveWorkDate.getTime() == dto.leaveWorkDate.getTime();
    isEqual &&= this.takeBreakDate.getTime() == dto.takeBreakDate.getTime();
    isEqual &&= this.endBreakDate.getTime() == dto.endBreakDate.getTime();
    isEqual &&= this.attendanceCoodinate.equal(dto.attendanceCoodinate);
    isEqual &&= this.leaveWorkCoordinate.equal(dto.leaveWorkCoordinate);
    isEqual &&= this.takeBreakCoordinate.equal(dto.takeBreakCoordinate);
    isEqual &&= this.endBreakCoordinate.equal(dto.endBreakCoordinate);
    return isEqual;
  };
}

export class TimecardDtoBuilder {
  private employeeId?: string;
  private cardType: CardType;
  private coordinate: Coordinate;
  private punchDate: Date;

  build: () => TimecardDto = () => {
    const [attendanceDate, attendanceCoorinate] =
      this.cardType === CardType.Attendance
        ? [this.punchDate, this.coordinate]
        : [undefined, undefined];
    const [leaveWorkDate, leaveWorkCoorinate] =
      this.cardType === CardType.LeaveWork
        ? [this.punchDate, this.coordinate]
        : [undefined, undefined];
    const [takeBreakDate, tankeBreakCoorinate] =
      this.cardType === CardType.TakeBreak
        ? [this.punchDate, this.coordinate]
        : [undefined, undefined];
    const [endBreakDate, endBreakCoorinate] =
      this.cardType === CardType.EndBreak
        ? [this.punchDate, this.coordinate]
        : [undefined, undefined];

    return new TimecardDto(
      this.employeeId,
      attendanceDate,
      leaveWorkDate,
      takeBreakDate,
      endBreakDate,
      attendanceCoorinate,
      leaveWorkCoorinate,
      tankeBreakCoorinate,
      endBreakCoorinate
    );
  };

  setEmployeeId: (employeeId: string) => this = (employeeId: string) => {
    this.employeeId = employeeId;
    return this;
  };
  setCardType: (cardType: CardType) => this = (cardType: CardType) => {
    this.cardType = cardType;
    return this;
  };
  setCoordinate: (coordinate: Coordinate) => this = (
    coordinate: Coordinate
  ) => {
    this.coordinate = coordinate;
    return this;
  };
  setPunchDate: (punchDate: Date) => this = (punchDate: Date) => {
    this.punchDate = punchDate;
    return this;
  };
}
