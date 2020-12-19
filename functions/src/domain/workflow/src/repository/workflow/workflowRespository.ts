import Workflow from "../../entity/workflow/workflow";
import WorkflowCollection from "../../entity/workflow/workflowCollection";

export default interface WorkflowRepository {
  save(workflow: Workflow): Promise<Workflow>;
  search(): Promise<WorkflowCollection>;
}
