import Employee from "../Employee/Employee";
import CardType from "./CardType";

export default class Timecard {
  private employee: Employee;
  private cardType: CardType;
  private punchDate: Date;

  constructor(employee: Employee, cardType: CardType, punchDate: Date) {
    this.employee = employee;
    this.cardType = cardType;
    this.punchDate = punchDate;
  }
}
