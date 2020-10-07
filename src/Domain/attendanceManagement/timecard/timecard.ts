import Employee from "../employee/employee";
import { CardType, Coordinate } from "./valueObjects";

export default interface Timecard {
  employee: Employee
  cardType: CardType
  punchDate: Date
  coodinate: Coordinate

  isPunchedAfter: (date: Date) => boolean
  isPunchedBefore: (date: Date) => boolean
}
export default class Timecard implements Timecard{
  
}