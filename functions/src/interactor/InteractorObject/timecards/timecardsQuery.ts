import { DateTime } from "luxon";

class TimecardsQuery {
  constructor(
    readonly since?: DateTime,
    readonly until?: DateTime,
    readonly userId?: string
  ) {}
}

export default TimecardsQuery;
