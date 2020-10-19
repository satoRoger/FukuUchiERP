import Timecard from "./Timecard";
import EntityFactory from '../entityFactory';
import Employee from "../employee/employee";

export default class TimecardCollection {
  latestTimecard: () => Timecard = () => {
    return new EntityFactory().timecard().createAttendance(new EntityFactory().employee().createByRowId("test01"), new Date());
  };
}
