import Employee from "../Employee/Employee";
import CardType from "./CardType";
import Coordinate from "./Coordinate";
import Timecard from "./Timecard";

export default class TimecardFacroty {
  public create(
    employee: Employee,
    cardType: CardType,
    punchDate: Date,
    coodenate?: Coordinate
  ) {
    return new Timecard(employee, cardType, punchDate, coodenate);
  }
}
