import WorkflowAction from "../../../../domain/workflow/src/valueObject/workflowAction";
import { isString, isWorkflowAction } from "../../../../util/isType/isType";
import TypeValidateError from "../../../../controller/src/error/typeValidateError";

export default class WorkflowsPutParam {
  readonly id: string;
  readonly action?: WorkflowAction;
  constructor(id: any, action: any) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw TypeValidateError("id", "string");
    }
    if (isWorkflowAction(action)) {
      this.action = action;
    }
  }
}
