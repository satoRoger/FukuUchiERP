import Timecard from "../../src/entity/timecard/Timecard";
import CardType from "../../src/valueObject/cardtype";
import Coordinate from "../../src/valueObject/coordinate";
import Employee from "../../src/entity/employee/employee";
import { isCoordinate } from "../../src/service/utility/typeGuard";
import { DateTime } from "luxon";
import EmployeeFactory from "../../src/entity/employee/employeeFactory";

describe("timecard", () => {
  let punchDate: DateTime;
  let employee: Employee;
  let coordinate: Coordinate;
  let cardType: CardType;
  let timecard: Timecard;
  
});
