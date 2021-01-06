import { DateTime } from 'luxon';
import { isISOString, isString } from '../../../../util/isType/isType';

export default class EventsQuery {
	readonly since?: DateTime;
	readonly until?: DateTime;
	readonly userId?: string;
	readonly facilityId?: string;

	constructor(since?: any, until?: any, userId?: any, facilityId?: any) {
		if (isISOString(since)) {
			this.since = DateTime.fromISO(since);
		}

		if (isISOString(until)) {
			this.until = DateTime.fromISO(until);
		}

		if (isString(userId)) {
			this.userId = userId;
		}

		if (isString(facilityId)) {
			this.facilityId = facilityId
		}
	}
}
