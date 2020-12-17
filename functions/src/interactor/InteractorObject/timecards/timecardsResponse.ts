import "reflect-metadata";
import { DateTime } from "luxon";
import { injectable } from "inversify";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardsObject from "./timecardsObject";

@injectable()
abstract class TimecardsResponseInterface {
  abstract setResult: (result: TimecardsObject[]) => void;
  abstract parse: () => Array<Object>;
}

export default TimecardsResponseInterface;
