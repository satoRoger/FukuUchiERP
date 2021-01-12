import Workflow from "../../entity/workflow/workflow";
import WorkflowCollection from "../../entity/workflow/workflowCollection";
import Drafter from "../../entity/drafter/drafter";
import Approver from "../../entity/approver/approver";

export default interface WorkflowRepository {
  save(workflow: Workflow): Promise<Workflow>;
  search(drafter?: Drafter, approver?: Approver): Promise<WorkflowCollection>;
}
