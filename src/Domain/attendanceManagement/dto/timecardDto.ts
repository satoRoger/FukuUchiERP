import  {Coordinate}  from "../timecard/valueObjects";

export default interface TimecardDTO {
  readonly attendanceDate?: Date;
  readonly leaveWorkDate?: Date;
  readonly takeBreakDate?: Date;
  readonly endBreakDate?: Date;
  readonly attendanceCoodinate?: Coordinate;
  readonly leaveWorkCoordinate?: Coordinate;
  readonly takeBreakCoordinate?: Coordinate;
  readonly endBreakCoordinate?: Coordinate;
}
