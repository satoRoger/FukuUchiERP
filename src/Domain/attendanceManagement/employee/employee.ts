import { Coordinate, EmployeeId } from "../timecard/valueObjects";
import Timecard from "../timecard/timecard";
import TimecardRepository from "../timecard/timecardRepository";

export default class Employee {
  private id: EmployeeId;

  constructor(id: EmployeeId) {
    this.id = id;
  }

  getId: () => EmployeeId = () => {
    return this.id;
  };

  attendance: (
    punchDate: Date,
    punchRepository: TimecardRepository,
    coordinate?: Coordinate,
  ) => Promise<Timecard>;
  leaveWork: (
    punchDate: Date,
    punchRepository: TimecardRepository,
    coordinate?: Coordinate,
  ) => Promise<Timecard>;

  takeBreak: (
    punchDate: Date,
    punchRepository: TimecardRepository,
    coordinate?: Coordinate,
  ) => Promise<Timecard>;

  endBreak: (
    punchDate: Date,
    punchRepository: TimecardRepository,
    coordinate?: Coordinate,
  ) => Promise<Timecard>;
}
