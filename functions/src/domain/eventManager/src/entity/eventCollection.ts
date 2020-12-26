import Event from "./event";

export default class EventCollection implements Iterable<Event> {
  constructor(private collection: Event[] = new Array<Event>()) {}

  [Symbol.iterator](): Iterator<Event> {
    return this.collection[Symbol.iterator]();
  }
}
