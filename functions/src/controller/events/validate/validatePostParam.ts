import { DateTime } from "luxon";
import { textChangeRangeIsUnchanged } from "typescript";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import EventsPostParam from "../../../interactor/src/InteractorObject/events/eventsPostParam";
export default class ValidateEventsPostParam {
  constructor(
    private type?: EventType,
    private start?: DateTime,
    private end?: DateTime,
    private title?: string,
    private userId?: string,
    private facilityIds?: string[]
  ) {}

  createWithValid(): EventsPostParam | undefined {
    if (this.type && this.start && this.end && this.title) {
      return new EventsPostParam(
        this.type,
        this.start,
        this.end,
        this.title,
        this.userId,
        this.facilityIds
      );
    } else {
      return undefined;
    }
  }
}
