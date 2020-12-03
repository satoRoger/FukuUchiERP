import { DateTime } from "luxon";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import PunchAction from "../action/punchAction";

export default interface PunchSpecification {
  punchable: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Promise<boolean>;
}
