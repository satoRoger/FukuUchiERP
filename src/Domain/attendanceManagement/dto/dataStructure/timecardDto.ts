import Timecard from "../../timecard/timecard";
import { Coordinate } from "../../timecard/valueObjects";
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
}

export class TimecardDtoBuilder {
  private employeeId?: string;
  private attendanceDate?: Date;
  private leaveWorkDate?: Date;
  private takeBreakDate?: Date;
  private endBreakDate?: Date;
  private attendanceCoodinate?: Coordinate;
  private leaveWorkCoordinate?: Coordinate;
  private takeBreakCoordinate?: Coordinate;
  private endBreakCoordinate?: Coordinate;

  build: () => TimecardDto = () => {
    return new TimecardDto(
      this.employeeId,
      this.attendanceDate,
      this.leaveWorkDate,
      this.takeBreakDate,
      this.endBreakDate,
      this.attendanceCoodinate,
      this.leaveWorkCoordinate,
      this.takeBreakCoordinate,
      this.endBreakCoordinate
    );
  };

  setEmployeeId: (employeeId: string) => this = (employeeId: string) => {
    this.employeeId = employeeId;
    return this;
  };
  setAttendanceDate: (date: Date) => this = (date: Date) => {
    this.attendanceDate = date;
    return this;
  };
  setLeaveWorkDate: (date: Date) => this = (date: Date) => {
    this.leaveWorkDate = date;

    return this;
  };
  setTakeBreakDate: (date: Date) => this = (date: Date) => {
    this.takeBreakDate = date;

    return this;
  };
  setEndBreakDate: (date: Date) => this = (date: Date) => {
    this.endBreakDate = date;

    return this;
  };
  setAttendanceCoodinate: (coodinate: Coordinate) => this = (
    coodinate: Coordinate
  ) => {
    this.attendanceCoodinate = coodinate;

    return this;
  };
  setLeaveWorkCoodinate: (coodinate: Coordinate) => this = (
    coodinate: Coordinate
  ) => {
    this.leaveWorkCoordinate = coodinate;

    return this;
  };
  setTakeBreakCoodinate: (coodinate: Coordinate) => this = (
    coodinate: Coordinate
  ) => {
    this.takeBreakCoordinate = coodinate;

    return this;
  };
  setEndBreakCoordinate: (coodinate: Coordinate) => this = (
    coodinate: Coordinate
  ) => {
    this.endBreakCoordinate = coodinate;

    return this;
  };
}
