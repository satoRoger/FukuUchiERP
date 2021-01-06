import { DateTime } from 'luxon';
import CardType from '../../../../domain/attendanceManagement/src/valueObject/cardtype';
import EventType from '../../../../domain/eventManager/src/valueObject/eventType';
import { isEventType, isISOString, isString } from '../../../../util/isType/isType';

export default class EventsPostParam {
	readonly type: EventType;
	readonly start: DateTime;
	readonly end: DateTime;
	readonly title: string;
	readonly userId?: string;
	readonly facilityIds?: string[];
	constructor(type: any, start: any, end: any, title: any, userId?: any, facilityIds?: any) {
		if (isEventType(type)) {
			this.type = type;
		} else {
			throw '';
		}
		if (isISOString(start)) {
			this.start = DateTime.fromISO(start);
		} else {
			throw '';
		}

		if (isISOString(end)) {
			this.end = DateTime.fromISO(end);
		} else {
			throw '';
		}
		if (isString(title)) {
			this.title = title;
		} else {
			throw '';
		}
		if (isString(userId)) {
			this.userId = userId;
		}
		if (Array.isArray(facilityIds)) {
			this.facilityIds = facilityIds;
		}
	}
}
