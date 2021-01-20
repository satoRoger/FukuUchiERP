import { DateTime } from "luxon";
import EventType from "../../domain/eventManager/src/valueObject/eventType";
import ProfessionType from "../../domain/resourceManager/src/valueObject/professionType";
import RollType from "../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../domain/resourceManager/src/valueObject/workStyle";
import WorkflowType from "../../domain/workflow/src/valueObject/workflowType";
import WorkflowState from "../../domain/workflow/src/valueObject/workflowState";
import Fullname from "../../domain/resourceManager/src/valueObject/fullname";
import WorkflowAction from "../../domain/workflow/src/valueObject/workflowAction";

function hasProperty<K extends string>(
  x: unknown,
  name: K
): x is { [M in K]: unknown } {
  return x instanceof Object && name in x;
}

export function isString(val: any): val is string {
  return typeof val === "string";
}
type 
export function isStringArray(val: any): val is string[] {
  return Array.isArray(val)
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
  return true;
}

export function isRollType(val: any): val is RollType {
  return true;
}

export function isWorkStyle(val: any): val is WorkStyle {
  return true;
}

export function isWorkTime(val: any): val is WorkStyle {
  return true;
}

export function isProfession(val: any): val is ProfessionType {
  return true;
}

export function isWorkflowType(val: any): val is WorkflowType {
  return true;
}

export function isWorkflowState(val: any): val is WorkflowState {
  return true;
}
export function isWorkflowAction(val: any): val is WorkflowAction {
  return true;
}
export function isFullname(val: any): val is Fullname {
  return true;
}
