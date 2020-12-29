import { DateTime } from "luxon";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";

export default class EventsPostParam {
  constructor(
    readonly type: string,
    readonly start: DateTime,
    readonly end: DateTime,
    readonly title: string,
    readonly userId?: string,
    readonly facilityId?: string
  ) {}
}
