import { DateTime } from "luxon";
import {
  isDateTime,
  isISOString,
  isString,
} from "../../../../util/isType/isType";

class TimecardsQuery {
  readonly since?: DateTime;
  readonly until?: DateTime;
  readonly userId?: string;
  constructor(since: any, until: any, userId: any) {
    if (isDateTime(since)) {
      this.since = since;
    } else if (isISOString(since)) {
      this.since = DateTime.fromISO(since);
    }
    if (isDateTime(until)) {
      this.until = until;
    } else if (isISOString(until)) {
      this.until = DateTime.fromISO(until);
    }

    if (isString(userId)) {
      this.userId = userId;
    }
  }
}

export default TimecardsQuery;
