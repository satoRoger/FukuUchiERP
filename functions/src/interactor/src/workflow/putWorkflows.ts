import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsQuery from "../InteractorObject/workflows/workflowsQuery";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import WorkflowsPutParam from "../InteractorObject/workflows/workflowsPutParam";

export default async function PutWorkflows(
  param: WorkflowsPutParam
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const collection = await repository.search();

  return collection
    .getData()
    .map((workflow) => WorkflowAPIInterface.fromDomainWorkflow(workflow));
}
