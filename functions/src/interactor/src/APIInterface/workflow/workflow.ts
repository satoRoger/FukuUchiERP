import { DateTime } from "luxon";
import WorkflowState from "../../../../domain/workflow/src/valueObject/workflowState";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";

export default class WorkflowAPIInterface {
  readonly id: string;
  readonly drafterId: string;
  readonly approversId: string;
  readonly index: number;
  readonly petitionDate: string;
  readonly state: WorkflowState;
  readonly type: WorkflowType;
  readonly vacationDate?: string;
  
  constructor(id:any,drafterId:any,approversId:any,index:any,petitionDate:any,state:any,
}
