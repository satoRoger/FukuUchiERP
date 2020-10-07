import { Coordinate, EmployeeId } from "../timecard/valueObjects";


export default interface Employee {
  readonly id: EmployeeId;

  attendance: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<common.Result>;

  leaveWork: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<common.Result>;

  takeBreak: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<common.Result>;

  endBreak: (punchDate: Date, coordinate: Coordinate) => Promise<common.Result>;
}

export default class Employee implements Employee{

}