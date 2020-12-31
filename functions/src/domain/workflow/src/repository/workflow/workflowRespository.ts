import Workflow from "../../entity/workflow/workflow";
import WorkflowCollection from "../../entity/workflow/workflowCollection";
import Employee from '../../entity/employee/employee';

export default interface WorkflowRepository {
  save(workflow: Workflow): Promise<Workflow>;
  search(drafter?:Employee): Promise<WorkflowCollection>;
}
