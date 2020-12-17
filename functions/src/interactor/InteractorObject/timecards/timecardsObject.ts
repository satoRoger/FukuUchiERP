import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
export default class TimecardsObject {
  constructor(
    readonly userId: string,
    readonly date: DateTime,
    readonly cardType: CardType,
    readonly longitude?: number,
    readonly latitude?: number,
  ) {}
}
