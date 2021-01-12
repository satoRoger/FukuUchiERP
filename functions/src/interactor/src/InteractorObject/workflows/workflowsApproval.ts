import WorkflowAction from "../../../../domain/workflow/src/valueObject/workflowAction";

export default class WorkflowsApproval {
  readonly id?: string;
  readonly action?: WorkflowAction;
  constructor(id: any, action: any) {}
}
