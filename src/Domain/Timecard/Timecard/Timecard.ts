import Employee from "../Employee/Employee";
import CardType from "./CardType";
import Coordinate from "./Coordinate";

export default class Timecard {
  private employee: Employee;
  private cardType: CardType;
  private punchDate: Date;
  private coodenate: Coordinate;

  constructor(
    employee: Employee,
    cardType: CardType,
    punchDate: Date,
    coodenate?: Coordinate
  ) {
    this.employee = employee;
    this.cardType = cardType;
    this.punchDate = punchDate;
    if (coodenate != undefined) {
      this.coodenate = coodenate;
    }
  }

  public isPunchedAfter(date: Date) {
    return date <= this.punchDate;
  }
  public isPunchedBefore(date: Date) {
    return this.punchDate <= date;
  }
}
