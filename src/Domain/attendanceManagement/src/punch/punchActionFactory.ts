import PunchAction from "./action/punchAction";
import Coordinate from "../valueObject/coordinate";
import PunchAttendanceAction from "./action/punchAttendanceAction";
import TimecardRepository from "../repository/timecard/timecardRepository";

export default class PunchActionFactory {
  actionAttendance: (
    repository: TimecardRepository,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction();
  };
  actionLeavework: (
    repository: TimecardRepository,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction();
  };
  actionTakebreak: (
    repository: TimecardRepository,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction();
  };
  actionEndbreak: (
    repository: TimecardRepository,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction();
  };
}
