import CardType from "./CardType";
import Employee from "../Employee/Employee";

interface IPunchTimecard {
  punch(employee: Employee, date: Date, cardType: CardType);
}
