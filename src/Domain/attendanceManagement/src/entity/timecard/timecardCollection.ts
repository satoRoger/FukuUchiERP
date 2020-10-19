import Timecard from "./timecard";
import EntityFactory from "../entityFactory";
import Employee from "../employee/employee";
import { DateTime } from "luxon";

type filterCallback = { (timecard: Timecard): boolean };

export default class TimecardCollection {
  constructor(private timecardCollection: Timecard[] = new Array<Timecard>()) {}

  add: (timecard: Timecard) => this = (timecard) => {
    this.timecardCollection.push(timecard);
    return this;
  };

  latestTimecard: () => Timecard = () => {
    return new EntityFactory()
      .timecard()
      .createAttendance(
        new EntityFactory().employee().createByRowId("test01"),
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
}
