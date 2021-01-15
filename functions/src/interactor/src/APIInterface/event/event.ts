import { DateTime } from "luxon";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
import {
  isISOString,
  isString,
  isEventType,
  isDateTime,
} from "../../../../util/isType/isType";
import CalendarEvent from "../../../../domain/eventManager/src/entity/event/event";

export default class EventAPIInterface {
  readonly id: string;
  readonly start: string;
  readonly end: string;
  readonly title: string;
  readonly type: EventType;
  readonly userId?: string;
  readonly facilityId?: string;

  static fromDomainEvent(event: CalendarEvent) {
    return new EventAPIInterface(
      event.id.value,
      event.start.toISO(),
      event.end.toISO(),
      event.title.value,
      event.type,
      event.employeeId?.value,
      event.facilityId?.value
    );
  }

  constructor(
    id: any,
    start: any,
    end: any,
    title: any,
    type: any,
    userId?: any,
    facilityId?: any
  ) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw "";
    }
    if (isISOString(start)) {
      this.start = start;
    } else if (isDateTime(start)) {
      this.start = start.toISO();
    } else {
      throw "";
    }
    if (isISOString(end)) {
      this.end = end;
    } else if (isDateTime(end)) {
      this.end = end.toISO();
    } else {
      throw "";
    }
    if (isString(title)) {
      this.title = title;
    } else {
      throw "";
    }
    if (isEventType(type)) {
      this.type = type;
    } else {
      throw "";
    }
    if (isString(userId)) {
      this.userId = userId;
    }
    if (isString(facilityId)) {
      this.facilityId = facilityId;
    }
  }
}
