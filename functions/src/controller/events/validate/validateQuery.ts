import { DateTime } from "luxon";
import EventsQuery from "../../../interactor/src/InteractorObject/events/eventsQuery";
export default class ValidateEventsQuery {
  constructor(private since?: DateTime, private until?: DateTime) {}

  createWithValid(): EventsQuery | undefined {
    return new EventsQuery(this.since, this.until);
  }
}
