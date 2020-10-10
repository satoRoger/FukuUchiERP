import Employee from "../employee/employee";
import { CardType, Coordinate } from "./valueObjects";
import container from "@/di/inversify.config";
import Types from "@/di/types";
import TimecardDto from "../dto/dataStructure/timecardDto";
import TransferToDto from "../dto/transfer/transferToDto";

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
  punchEmployee: () => Employee = () => {
    return this.employee;
  };

  isPunchedAfter: (date: Date) => boolean = (date) => {
    return this.punchDate <= date;
  };
  isPunchedBefore: (date: Date) => boolean = (date) => {
    return date <= this.punchDate;
  };

  toDTO: () => TimecardDto = () => {
    return container
      .get<TransferToDto>(Types.TransferToTimecardDTO)
      .transfer(
        { id: "employee", val: this.employee },
        { id: "cardType", val: this.cardType },
        { id: "punchDate", val: this.punchDate },
        { id: "coodinate", val: this.coodinate }
      );
  };
}
