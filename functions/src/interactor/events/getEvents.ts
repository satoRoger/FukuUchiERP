import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";

export default async function GetEvents(
): Promise<EventsResponseInterface> {
  const response = container.get<EventsResponseInterface>(
    Types.EventsResponse
  );

  const repository = container.get<EventRepository>(
    Types.EventRepository
  );

  return response;
}
