import { DateTime } from "luxon";
export function isUndefined(v: any): v is undefined {
  return v === undefined;
}

export function dayStart(date: DateTime): DateTime {
  return date.set({ hour: 0, minute: 0, millisecond: 0 });
}
