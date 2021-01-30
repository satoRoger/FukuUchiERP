import Event from "../../entity/event/event";
import EventCollection from "../../entity/event/eventCollection";
import { DateTime } from "luxon";
import Employee from "../../entity/employee/employee";
import Facility from "../../entity/facility/facility";
import CalendarId from "../../valueObject/eventId";
import EventId from "../../valueObject/eventId";

export default interface EventRepository {
  add(event: Event): Promise<Event>;
  save(event: Event): Promise<Event>;
  search(
    from?: DateTime,
    to?: DateTime,
    employee?: Employee,
    facility?: Facility
  ): Promise<EventCollection>;
  remove(eventId: EventId): Promise<EventId>;
}
