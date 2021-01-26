import { DateTime } from "luxon";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
import {
  isEventType,
  isISOString,
  isString,
  isDateTime,
} from "../../../../util/isType/isType";

export default class EventsPutParam {
  readonly id: string;
  readonly type: EventType;
  readonly start: DateTime;
  readonly end: DateTime;
  readonly title: string;
  readonly userId?: string;
  readonly facilityId?: string;
  constructor(
    id: any,
    type: any,
    start: any,
    end: any,
    title: any,
    userId?: any,
    facilityId?: any
  ) {
    console.log(id);
    if (isString(id)) {
      this.id = id;
    } else {
      throw "";
    }
    if (isEventType(type)) {
      this.type = type;
    } else {
      throw "";
    }
    if (isISOString(start)) {
      this.start = DateTime.fromISO(start);
    } else if (isDateTime(start)) {
      this.start = start;
    } else {
      throw "";
    }

    if (isISOString(end)) {
      this.end = DateTime.fromISO(end);
    } else if (isDateTime(end)) {
      this.end = end;
    } else {
      throw "";
    }
    if (isString(title)) {
      this.title = title;
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
