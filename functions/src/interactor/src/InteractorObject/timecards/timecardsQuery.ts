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
  constructor(option: { since?: any; until?: any; userId?: any }) {
    if (isDateTime(option.since)) {
      this.since = option.since;
    } else if (isISOString(option.since)) {
      this.since = DateTime.fromISO(option.since);
      const sinceISO = this.since.toISO();
    }
    if (isDateTime(option.until)) {
      this.until = option.until;
    } else if (isISOString(option.until)) {
      this.until = DateTime.fromISO(option.until);
    }

    if (isString(option.userId)) {
      this.userId = option.userId;
    }
  }
}

export default TimecardsQuery;
