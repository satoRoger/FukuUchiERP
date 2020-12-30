import Event from "./event";
import CalendarEvent from "./event";

export default class EventCollection implements Iterable<Event> {
  constructor(private collection: Event[] = new Array<Event>()) {}

  public add(event: CalendarEvent) {
    this.collection.push(event);
    return this;
  }

  [Symbol.iterator](): Iterator<Event> {
    return this.collection[Symbol.iterator]();
  }
}
