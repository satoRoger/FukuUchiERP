import PunchAction from "./action/punchAction";
import Coordinate from "../valueObject/coordinate";
import PunchAttendanceAction from "./action/punchAttendanceAction";
import TimecardRepository from "../repository/timecard/timecardRepository";
import PunchSpecification from './specification/punchSpecification';
import { DateTime } from "luxon";

export default class PunchActionFactory {
  actionAttendance: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction(repository, punchDate, coordinate);
  };
  actionLeavework: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction(repository, punchDate, coordinate);
  };
  actionTakebreak: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction(repository, punchDate, coordinate);
  };
  actionEndbreak: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (repository, punchDate, coordinate) => {
    return new PunchAttendanceAction(repository, punchDate, coordinate);
  };
}
