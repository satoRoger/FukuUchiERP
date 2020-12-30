import { DateTime } from "luxon";

export default class EventsQuery {
  constructor(
    readonly since?: DateTime,
    readonly until?: DateTime,
    readonly userId?: string,
    readonly facilityId?: string
  ) {}
}
