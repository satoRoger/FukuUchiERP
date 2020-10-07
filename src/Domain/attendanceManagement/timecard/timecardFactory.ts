import Timecard from "./timecard";

export default interface TimecardFactory {
  create: () => Timecard;
}
