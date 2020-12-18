import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";

export default class UsersPostParam {
  constructor(
    readonly userId: string,
    readonly cardType: CardType,
    readonly punchDate: DateTime,
    readonly latitude?: number,
    readonly longitude?: number
  ) {}
}
