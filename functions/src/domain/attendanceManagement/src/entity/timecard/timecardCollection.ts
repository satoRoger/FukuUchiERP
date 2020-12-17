import Timecard from "./timecard";
import Employee from "../employee/employee";
import { DateTime } from "luxon";
import TimecardFactory from "./timecardFactory";
import EmployeeFactory from "../employee/employeeFactory";

type filterCallback = { (timecard: Timecard): boolean };

export default class TimecardCollection implements Iterable<Timecard> {
  constructor(private timecardCollection: Timecard[] = new Array<Timecard>()) {}

  add: (timecard: Timecard) => this = (timecard) => {
    this.timecardCollection.push(timecard);
    return this;
  };

  latestTimecard: () => Timecard = () => {
    return new TimecardFactory().createAttendance(
      new EmployeeFactory().createByRowId("test01"),
      DateTime.fromISO("2020-10-10")
    );
  };
  filter: (callback: (timecard: Timecard) => boolean) => TimecardCollection = (
    callback
  ) => {
    return new TimecardCollection(this.timecardCollection.filter(callback));
  };

  size: () => number = () => {
    return this.timecardCollection.length;
  };

  [Symbol.iterator](): Iterator<Timecard> {
    return this.timecardCollection[Symbol.iterator]();
  }
}
