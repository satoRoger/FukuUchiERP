import PunchAction from "../../punch/action/punchAction";
import PunchSpecification from "../../punch/specification/punchSpecification";
import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Timecard from "../timecard/Timecard";

export default class Employee {
  private id: EmployeeId;

  constructor(id: EmployeeId) {
    this.id = id;
  }

  getId: () => EmployeeId = () => {
    return this.id;
  };

  punchTimecard: (
    specification: PunchSpecification,
    action: PunchAction
  ) => Promise<Timecard> = (action) => {
    return new Promise<Timecard>((resolve, reject) => {
      resolve(
        new Timecard(
          this,
          CardType.Attendance,
          new Date(),
          new Coordinate(2.0, 2.0)
        )
      );
    });
  };
}
