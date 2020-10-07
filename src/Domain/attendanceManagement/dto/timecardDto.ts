import Timecard from "../timecard/timecard";
import { Coordinate } from "../timecard/valueObjects";

export default class TimecardDTO {
  public attendanceDate?: Date;
  public leaveWorkDate?: Date;
  public takeBreakDate?: Date;
  public endBreakDate?: Date;
  public attendanceCoodinate?: Coordinate;
  public leaveWorkCoordinate?: Coordinate;
  public takeBreakCoordinate?: Coordinate;
  public endBreakCoordinate?: Coordinate;
}
