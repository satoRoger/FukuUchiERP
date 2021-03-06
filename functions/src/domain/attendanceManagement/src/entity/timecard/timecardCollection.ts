import Timecard from './timecard';
import Employee from '../employee/employee';
import { DateTime } from 'luxon';
import TimecardFactory from './timecardFactory';
import EmployeeFactory from '../employee/employeeFactory';

type filterCallback = { (timecard: Timecard): boolean };

export default class TimecardCollection implements Iterable<Timecard> {
	constructor(private timecardCollection: Timecard[] = new Array<Timecard>()) {}

	add: (timecard: Timecard) => this = (timecard) => {
		this.timecardCollection.push(timecard);
		return this;
	};

	filter: (callback: (timecard: Timecard) => boolean) => TimecardCollection = (callback) => {
		return new TimecardCollection(this.timecardCollection.filter(callback));
	};

	getData() {
		return this.timecardCollection;
	}

	size: () => number = () => {
		return this.timecardCollection.length;
	};

	[Symbol.iterator](): Iterator<Timecard> {
		return this.timecardCollection[Symbol.iterator]();
	}
}
