import { DateTime } from "luxon";
import EventsQuery from "../../../interactor/src/InteractorObject/events/eventsQuery";
import FacilitiesQuery from "../../../interactor/src/InteractorObject/facilities/facilitiesQuery";
export default class ValidateEventsQuery {
  constructor(private since?: DateTime, private until?: DateTime) {}

  createWithValid(): FacilitiesQuery | undefined {
    return new FacilitiesQuery();
  }
}
