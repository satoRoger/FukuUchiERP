import Employee from "../employee/employee";
import { CardType, Coordinate } from "./valueObjects";

export default class Timecard {
  private employee: Employee;
  private cardType: CardType;
  private punchDate: Date;
  private coodinate: Coordinate;

  constructor(
    employee: Employee,
    cardType: CardType,
    punchDate: Date,
    coodinate: Coordinate
  ) {
    this.employee = employee;
    this.cardType = cardType;
    this.punchDate = punchDate;
    this.coodinate = coodinate;
  }

  isPunchedAfter: (date: Date) => boolean = (date) => {
    return this.punchDate <= date;
  };
  isPunchedBefore: (date: Date) => boolean = (date) => {
    return date <= this.punchDate;
  };
}
