import PunchAction from "./action/punchAction";
import Coordinate from "../valueObject/coordinate";
import PunchAttendanceAction from "./action/punchAttendanceAction";
import PunchSpecification from './specification/punchSpecification';
import { DateTime } from "luxon";
import PunchLeaveworkAction from './action/punchLeaveworkAction';

export default class PunchActionFactory {
  actionAttendance: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAttendanceAction(specification, punchDate, coordinate);
  };
  actionLeavework: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchLeaveworkAction(specification, punchDate, coordinate);
  };
  actionTakebreak: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAttendanceAction(specification, punchDate, coordinate);
  };
  actionEndbreak: (
    specification:PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAttendanceAction(specification, punchDate, coordinate);
  };
}
