import PunchAction from "./punchAction";
import PunchSpecification from "./punchSpecification";
import Coordinate from "../valueObject/coordinate";

export default class PunchActionFactory {
  actionAttendance: (
    specification: PunchSpecification,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAction();
  };
  actionLeavework: (
    specification: PunchSpecification,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAction();
  };
  actionTakebreak: (
    specification: PunchSpecification,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAction();
  };
  actionEndbreak: (
    specification: PunchSpecification,
    punchDate: Date,
    coordinate?: Coordinate
  ) => PunchAction = (specification, punchDate, coordinate) => {
    return new PunchAction();
  };
}
