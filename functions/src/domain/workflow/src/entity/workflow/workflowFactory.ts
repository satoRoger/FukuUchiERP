import Workflow from "./workflow";
import { DateTime } from "luxon";
import WorkflowState from "../../valueObject/workflowState";
import WorkflowType from "../../valueObject/workflowType";
import WorkflowIndex from "../../valueObject/workflowIndex";
import WorkflowId from "../../valueObject/workflowId";
import DrafterId from "../../valueObject/drafterId";
import ApproverListId from "../../valueObject/approverListId";

export default class WorkflowFactory {
  public create(
    id: string,
    approverListId: string,
    drafterId: string,
    index: number,
    petitionDate: DateTime,
    state: WorkflowState,
    type: WorkflowType,
    vacationDate?: DateTime
  ): Workflow {
    return new Workflow(
      new WorkflowId(id),
      new ApproverListId(approverListId),
      new DrafterId(drafterId),
      new WorkflowIndex(index),
      petitionDate,
      state,
      type,
      vacationDate
    );
  }
}
