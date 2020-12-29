import { DateTime } from "luxon";

export default class CalendarEvent {
  constractor(
    private _id: CalendarId,
    private _start: DateTime,
    private _end: DateTime,
    private _title: Title,
    private _employeeId: EmployeeId,
    private _facilityId: FacilityId
  ) {}
}
