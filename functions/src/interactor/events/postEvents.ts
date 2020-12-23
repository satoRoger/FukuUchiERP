import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import WorkflowsPostParam from "../InteractorObject/workflows/workflowsPostParam";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";

export default async function PostEvents(
  param: EventsPostParam
): Promise<EventsResponseInterface> {
  const response = container.get<EventsResponseInterface>(
    Types.EventsResponse
  );

  const repository = container.get<EventRepository>(
    Types.EventsRepository
  );

  return response;
}
