import TimecardDto from "../../dto/dataStructure/timecardDto";
import TransferToDto from "../../dto/transfer/transferToDto";
import CardType from "../../valueObject/cardtype";
import { Coordinate } from "../../valueObject/coordinate";
import Employee from "../employee/employee";

export default class Timecard {
  constructor(
    private employee: Employee,
    private cardType: CardType,
    private punchDate: Date,
    private coodinate: Coordinate
  ) { }
  
  punchEmployee: () => Employee = () => {
    return this.employee;
  };

  isPunchedAfter: (date: Date) => boolean = (date) => {
    return this.punchDate <= date;
  };
  isPunchedBefore: (date: Date) => boolean = (date) => {
    return date <= this.punchDate;
  };
}
