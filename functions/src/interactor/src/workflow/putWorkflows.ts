import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import WorkflowsPutParam from "../InteractorObject/workflows/workflowsPutParam";
import WorkflowId from "../../../domain/workflow/src/valueObject/workflowId";
import Workflow from "../../../domain/workflow/src/entity/workflow/workflow";

export default async function PutWorkflows(
  param: WorkflowsPutParam
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const workflowId = new WorkflowId(param.id);
  const collection = await repository.search(workflowId);
  const workflow = collection.getData()[0];
  workflow.approve();

  const newWorkflow = await repository.save(workflow);

  return [WorkflowAPIInterface.fromDomainWorkflow(newWorkflow)];
}
