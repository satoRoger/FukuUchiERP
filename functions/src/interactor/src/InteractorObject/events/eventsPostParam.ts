import { DateTime } from "luxon";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";

export default class EventsPostParam {
  constructor(
    readonly type: EventType,
    readonly start: DateTime,
    readonly end: DateTime,
    readonly title: string,
    readonly userId?: string,
    readonly facilityIds?: string[]
  ) {}
}
