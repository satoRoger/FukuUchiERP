import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/timecard";

export default class TimecardsObject {
  constructor(
    readonly userId: string,
    readonly date: DateTime,
    readonly cardType: CardType,
    readonly longitude?: number,
    readonly latitude?: number
  ) {}
}