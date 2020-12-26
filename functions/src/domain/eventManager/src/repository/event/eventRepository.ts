import Event from "../../entity/event";
import EventCollection from "../../entity/eventCollection";

export default interface EventRepository {
  save(person: Event): Promise<Event>;
  search(): Promise<EventCollection>;
}
