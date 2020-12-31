import { DateTime } from "luxon";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import WorkflowState from "../../../../domain/workflow/src/valueObject/workflowState";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";

export default class WorkflowsPostParam {
  constructor(
    readonly drafterId: string,
    readonly approversId: string,
    readonly petitionDate: DateTime,
    readonly type: WorkflowType,
    readonly vacationDate?: DateTime
  ) {}
}
