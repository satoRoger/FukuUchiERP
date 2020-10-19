import Timecard from "./Timecard";
import EntityFactory from '../entityFactory';
import Employee from "../employee/employee";
import { DateTime } from 'luxon';

export default class TimecardCollection {
  latestTimecard: () => Timecard = () => {
    return new EntityFactory().timecard().createAttendance(new EntityFactory().employee().createByRowId("test01"), DateTime.fromISO("2020-10-10"));
  };
  filter: ((timecard) => boolean)TimecardCollection;
}
