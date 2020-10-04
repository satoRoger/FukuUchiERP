import EmployeeId from "./EmployeeId";
import Coordinate from "../Timecard/Coordinate";

export default class Employee {
  readonly id: EmployeeId;
  constructor(id: EmployeeId) {
    this.id = id;
  }
  public attendance(punchDate: Date, coodinate: Coordinate) {}
  public leaveWork(punchDate: Date, coodinate: Coordinate) {}
  public takeBreak(punchDate: Date, coodinate: Coordinate) {}
  public endBreak(punchDate: Date, coodinate: Coordinate) {}
}
