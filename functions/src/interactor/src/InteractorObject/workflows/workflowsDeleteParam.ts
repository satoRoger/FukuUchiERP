import WorkflowAction from "../../../../domain/workflow/src/valueObject/workflowAction";
import { isString, isWorkflowAction } from "../../../../util/isType/isType";
import TypeValidateError from "../../../../controller/src/v1/error/typeValidateError";

export default class WorkflowsDeleteParam {
  readonly id: string;
  constructor(id: any) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw TypeValidateError("id", "string");
    }
  }
}
