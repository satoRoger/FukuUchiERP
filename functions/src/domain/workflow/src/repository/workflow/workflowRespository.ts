import Workflow from "../../entity/workflow/workflow";
import WorkflowCollection from "../../entity/workflow/workflowCollection";
import Drafter from "../../entity/drafter/drafter";
import Approver from "../../entity/approver/approver";
import WorkflowId from "../../valueObject/workflowId";

export default interface WorkflowRepository {
  save(workflow: Workflow): Promise<Workflow>;
  search(
    workflowId?: WorkflowId,
    drafter?: Drafter,
    approver?: Approver
  ): Promise<WorkflowCollection>;
  remove(workflowId: WorkflowId): Promise<WorkflowId>;
}
