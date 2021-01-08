import CalendarEvent from './event';

export default class EventCollection implements Iterable<CalendarEvent> {
	constructor(private collection: CalendarEvent[] = new Array<CalendarEvent>()) {}

	public add(event: CalendarEvent) {
		this.collection.push(event);
		return this;
	}
	public getData() {
		return this.collection;
	}

	[Symbol.iterator](): Iterator<CalendarEvent> {
		return this.collection[Symbol.iterator]();
	}
}
