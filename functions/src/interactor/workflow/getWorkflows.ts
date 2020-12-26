import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";

export default async function GetWorkflows(
): Promise<WorkflowsResponseInterface> {
  const response = container.get<WorkflowsResponseInterface>(
    Types.WorkflowsResponse
  );

  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  return response;
}
