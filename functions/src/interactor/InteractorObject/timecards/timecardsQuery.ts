import { DateTime } from "luxon";

class TimecardsQuery {
  readonly since?: DateTime;
  readonly until?: DateTime;
  readonly userId?: string;

  constructor(since?: string, until?: string, userId?: string) {
    if (since) {
      this.since = DateTime.fromISO(since);
    }
    if (until) {
      this.until = DateTime.fromISO(until);
    }
    if (userId) {
      this.userId = userId;
    }
  }
}

export default TimecardsQuery;