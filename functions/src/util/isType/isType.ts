import { DateTime } from 'luxon';
import EventType from '../../domain/eventManager/src/valueObject/eventType';
export function isString(val: any): val is string {
	return typeof val === 'string';
}

export function isNumber(val: any): val is number {
	return typeof val === 'number';
}

export function isISOString(val: any): val is string {
	return DateTime.fromISO(val).isValid;
}

export function isBoolean(val: any): val is boolean {
	return typeof val === 'boolean';
}

export function isEventType(val: any): val is EventType {
	return val === EventType.FacilityHoliday || val === EventType.UserVacation;
}

export function isRollType(val:any):val is RollType{
	return val == 
}

export function isFullname(val:any):val is FullnameAPIInterface{
	
}

export function isFullnameArray(val:any):val is FullnameAPIInterface[]{
	
}

export function isWorkStyle(val:any):val is WorkStyle{
	
}

export function isProfession(val:any):val is ProfessionType{
	
}