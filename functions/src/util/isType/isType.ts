import { DateTime } from "luxon";
import EventType from "../../domain/eventManager/src/valueObject/eventType";
import ProfessionType from "../../domain/resourceManager/src/valueObject/professionType";
import RollType from "../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../domain/resourceManager/src/valueObject/workStyle";
import WorkflowType from "../../domain/workflow/src/valueObject/workflowType";
import WorkflowState from "../../domain/workflow/src/valueObject/workflowState";
import Fullname from "../../domain/resourceManager/src/valueObject/fullname";
import WorkflowAction from "../../domain/workflow/src/valueObject/workflowAction";
import WorkDate from "../../domain/resourceManager/src/valueObject/workdate";
import Name from "../../domain/resourceManager/src/valueObject/name";

function hasProperty<K extends string>(
  x: unknown,
  name: K
): x is { [M in K]: unknown } {
  return x instanceof Object && name in x;
}

export function isString(val: any): val is string {
  return typeof val === "string";
}
export function isStringArray(val: any): val is string[] {
  return Array.isArray(val);
}

export function isNumber(val: any): val is number {
  return typeof val === "number";
}

export function isISOString(val: any): val is string {
  return isString(val) && Date.parse(val) != NaN;
}
export function isDateTime(val: any): val is DateTime {
  return val instanceof DateTime;
}

export function isBoolean(val: any): val is boolean {
  return typeof val === "boolean";
}

export function isEventType(val: any): val is EventType {
  return val === EventType.FacilityHoliday || val === EventType.UserVacation;
}

export function isRollType(val: any): val is RollType {
  return val === RollType.manager || val === RollType.user;
}

export function isWorkStyle(val: any): val is WorkStyle {
  return val === WorkStyle.fulltime || val === WorkStyle.parttime;
}
export function isWorkDay(val: any): val is WorkDate[] {
  return Array.isArray(val);
}

export function isWorkTime(val: any): val is WorkStyle {
  return true;
}

export function isProfession(val: any): val is ProfessionType {
  return (
    val === ProfessionType.assistance ||
    val === ProfessionType.clerk ||
    val === ProfessionType.doctor ||
    val === ProfessionType.hygienist ||
    val === ProfessionType.reception
  );
}

export function isWorkflowType(val: any): val is WorkflowType {
  return (
    val === WorkflowType.paidVacation ||
    val === WorkflowType.paidVacationAM ||
    val === WorkflowType.paidVacationPM
  );
}

export function isWorkflowState(val: any): val is WorkflowState {
  return (
    val === WorkflowState.complete ||
    val === WorkflowState.deny ||
    val === WorkflowState.wait
  );
}
export function isWorkflowAction(val: any): val is WorkflowAction {
  return val === WorkflowAction.accept || val === WorkflowAction.deny;
}
export function isFullname(val: any): val is Fullname {
  return val.familyName instanceof Name && val.givenName instanceof Name;
}
