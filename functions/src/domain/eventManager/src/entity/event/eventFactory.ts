import EventType from '../../valueObject/eventType';
import { DateTime } from 'luxon';
import CalendarEvent from './event';
import CalendarId from '../../valueObject/calendarId';
import EmployeeId from '../../valueObject/employeeId';
import FacilityId from '../../valueObject/facilityId';
import Title from '../../valueObject/title';

export default class EventFactory {
	constructor() {}

	public create(
		id: string,
		type: EventType,
		start: DateTime,
		end: DateTime,
		title: string,
		employeeId?: string,
		facilityId?: string
	) {
		return new CalendarEvent(
			new CalendarId(id),
			type,
			start,
			end,
			new Title(title),
			employeeId ? new EmployeeId(employeeId) : undefined,
			facilityId ? new FacilityId(id) : undefined
		);
	}
}
