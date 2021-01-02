import { DateTime } from "luxon";
import CalendarId from "../../valueObject/calendarId";
import EmployeeId from "../../valueObject/employeeId";
import EventType from "../../valueObject/eventType";
import FacilityId from "../../valueObject/facilityId";
import Title from "../../valueObject/title";

export default class CalendarEvent {
  constructor(
    private _id: CalendarId,
    private _type: EventType,
    private _start: DateTime,
    private _end: DateTime,
    private _title: Title,
    private _employeeId?: EmployeeId,
    private _facilityIds?: FacilityId[]
  ) {}
  public get id() {
    return this._id;
  }
  public get start() {
    return this._start;
  }
  public get end() {
    return this._end;
  }
  public get type() {
    return this._type;
  }
  public get title() {
    return this._title;
  }
  public get employeeId() {
    return this._employeeId;
  }
  public get facilityIds() {
    return this._facilityIds;
  }
}
