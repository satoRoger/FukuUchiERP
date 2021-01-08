import EventType from '../../valueObject/eventType';
import { DateTime } from 'luxon';
import CalendarId from '../../valueObject/calendarId';
import EmployeeId from '../../valueObject/employeeId';
import FacilityId from '../../valueObject/facilityId';
import Title from '../../valueObject/title';
import Employee from './employee';

export default class EmployeeFactory {
	constructor() {}

	public create(id: string) {
		return new Employee(new EmployeeId(id));
	}
}
