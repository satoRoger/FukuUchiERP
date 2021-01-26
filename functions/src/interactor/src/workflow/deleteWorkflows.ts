import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import WorkflowsPutParam from "../InteractorObject/workflows/workflowsPutParam";
import WorkflowId from "../../../domain/workflow/src/valueObject/workflowId";
import EventsPostParam from "../InteractorObject/events/eventsPostParam";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import PostEvents from "../events/postEvents";
import WorkflowAction from "../../../domain/workflow/src/valueObject/workflowAction";
import WorkflowsDeleteParam from "../InteractorObject/workflows/workflowsDeleteParam";

export default async function DeleteWorkflows(
  param: WorkflowsDeleteParam
): Promise<string> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const workflowId = new WorkflowId(param.id);
  await repository.remove(workflowId);

  return workflowId.value;
}
