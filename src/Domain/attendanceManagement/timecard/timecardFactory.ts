import Timecard from "./Timecard";

export default interface TimecardFactory {
  create: () => Timecard;
}
