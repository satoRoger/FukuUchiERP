import { DateTime } from "luxon";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";

class TimecardsPostParam {
  constructor(
    readonly userId: string,
    readonly cardType: CardType,
    readonly punchDate: DateTime,
    readonly latitude?: number,
    readonly longitude?: number,
  ) {}
}

export default TimecardsPostParam;
