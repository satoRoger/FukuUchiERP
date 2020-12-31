import { DateTime } from "luxon";
import WorkflowState from "../../../../domain/workflow/src/valueObject/workflowState";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";

export default interface WorkflowAPIInterface {
  id: string;
  drafterId: string;
  approversId: string;
  index: number;
  petitionDate: DateTime;
  state: WorkflowState;
  type: WorkflowType;
  vacationDate?: DateTime;
}
