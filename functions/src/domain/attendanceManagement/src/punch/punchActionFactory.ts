import PunchAction from "./action/punchAction";
import Coordinate from "../valueObject/coordinate";
import PunchAttendanceAction from "./action/punchAttendanceAction";
import PunchSpecification from "./specification/punchSpecification";
import { DateTime } from "luxon";
import PunchLeaveworkAction from "./action/punchLeaveworkAction";
import PunchTakebreakAction from './action/punchTakebreakAction';
import PunchEndbreakAction from './action/punchEndbreakAction';
import logger from "src/util/logger/logger";

export default class PunchActionFactory {
  @logger.debug.traceMethodCall
  actionAttendance(
    specification: PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): PunchAction {
    return new PunchAttendanceAction(specification, punchDate, coordinate);
  }
  @logger.debug.traceMethodCall
  actionLeavework(
    specification: PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): PunchAction {
    return new PunchLeaveworkAction(specification, punchDate, coordinate);
  }
  @logger.debug.traceMethodCall
  actionTakebreak(
    specification: PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): PunchAction {
    return new PunchTakebreakAction(specification, punchDate, coordinate);
  }
  @logger.debug.traceMethodCall
  actionEndbreak(
    specification: PunchSpecification,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): PunchAction {
    return new PunchEndbreakAction(specification, punchDate, coordinate);
  }
}
