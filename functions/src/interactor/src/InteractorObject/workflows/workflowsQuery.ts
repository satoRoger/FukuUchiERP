import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";

export default class WorkflowsQuery {
  readonly drafterId?: string;
  readonly approverId?: string;
  constructor(option: { drafterId?: any; approverId?: any }) {
    if (isString(option.drafterId)) {
      this.drafterId = option.drafterId;
    }
    if (isString(option.approverId)) {
      this.approverId = option.approverId;
    }
  }
}
