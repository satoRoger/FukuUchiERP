import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowsPostParam from "../InteractorObject/workflows/workflowsPostParam";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";

export default async function PostWorkflows(
  param: WorkflowsPostParam
): Promise<WorkflowsResponseInterface> {
  const response = container.get<WorkflowsResponseInterface>(
    Types.WorkflowsResponse
  );

  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  return response;
}
