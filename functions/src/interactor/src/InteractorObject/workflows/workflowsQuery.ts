import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";

export default class WorkflowsQuery {
  readonly drafterId?: string;
  readonly approverId?: string;
  constructor(drafterId: any, approverId: any) {
    if (isString(drafterId)) {
      this.drafterId = drafterId;
    }
    if (isString(approverId)) {
      this.approverId = approverId;
    }
  }
}
