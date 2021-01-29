import { DateTime } from "luxon";
import { isISOString, isString } from "../../../../util/isType/isType";

export default class EventsQuery {
  readonly since?: DateTime;
  readonly until?: DateTime;
  readonly userId?: string;
  readonly facilityId?: string;

  constructor(option: {
    since?: any;
    until?: any;
    userId?: any;
    facilityId?: any;
  }) {
    if (isISOString(option.since)) {
      this.since = DateTime.fromISO(option.since);
    }

    if (isISOString(option.until)) {
      this.until = DateTime.fromISO(option.until);
    }

    if (isString(option.userId)) {
      this.userId = option.userId;
    }

    if (isString(option.facilityId)) {
      this.facilityId = option.facilityId;
    }
  }
}
