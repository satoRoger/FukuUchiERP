import "reflect-metadata";
import { DateTime } from "luxon";
import { injectable } from "inversify";
import Timecard from "../../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardsObject from "./workflowsObject";
import WorkflowsObject from "./workflowsObject";

@injectable()
export default abstract class WorkflowsResponseInterface {
  abstract setResult: (result: WorkflowsObject[]) => void;
  abstract parse: () => Array<Object>;
}

