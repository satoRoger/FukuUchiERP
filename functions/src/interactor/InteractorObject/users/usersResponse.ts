import "reflect-metadata";
import { DateTime } from "luxon";
import { injectable } from "inversify";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardsObject from "./usersObject";

@injectable()
export default abstract class UsersResponseInterface {
  abstract setResult: (result: TimecardsObject[]) => void;
  abstract parse: () => Array<Object>;
}

