import Event from "../../entity/event/event";
import EventCollection from "../../entity/event/eventCollection";
import CalendarEvent from "../../entity/event/event";
import { DateTime } from "luxon";
import Employee from "../../entity/employee/employee";
import Facility from "../../entity/facility";

export default interface EventRepository {
  save(event: CalendarEvent): Promise<Event>;
  search(
    from?: DateTime,
    to?: DateTime,
    employee?: Employee,
    facility?: Facility
  ): Promise<EventCollection>;
}
