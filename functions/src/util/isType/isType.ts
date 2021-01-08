import { DateTime } from 'luxon';
import EventType from '../../domain/eventManager/src/valueObject/eventType';
import ProfessionType from '../../domain/resourceManager/src/valueObject/professionType';
import RollType from '../../domain/resourceManager/src/valueObject/rollType';
import WorkStyle from '../../domain/resourceManager/src/valueObject/workStyle';
import FullnameAPIInterface from '../../interactor/src/APIInterface/user/fullname';
export function isString(val: any): val is string {
	return typeof val === 'string';
}
export function isStringArray(val: any): val is string[] {
	return true;
}

export function isNumber(val: any): val is number {
	return typeof val === 'number';
}

export function isISOString(val: any): val is string {
	return DateTime.fromISO(val).isValid;
}
export function isDateTime(val: any): val is DateTime {
	return val instanceof DateTime;
}

export function isBoolean(val: any): val is boolean {
	return typeof val === 'boolean';
}

export function isEventType(val: any): val is EventType {
	return val in EventType;
}

export function isRollType(val: any): val is RollType {
	return val in RollType;
}

export function isFullname(val: any): val is FullnameAPIInterface {
	return true;
}

export function isFullnameArray(val: any): val is FullnameAPIInterface[] {
	return true;
}

export function isWorkStyle(val: any): val is WorkStyle {
	return true;
}

export function isProfession(val: any): val is ProfessionType {
	return true;
}
