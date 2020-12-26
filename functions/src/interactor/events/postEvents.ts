import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import WorkflowsPostParam from "../InteractorObject/workflows/workflowsPostParam";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import EventRepository from '../../domain/eventManager/src/repository/event/eventRepository';
import EventsPostParam from "../InteractorObject/events/eventsPostParam";
import EventsResponseInterface from "../InteractorObject/events/eventsResponse";

export default async function PostEvents(
  param: EventsPostParam
): Promise<EventsResponseInterface> {
  const response = container.get<EventsResponseInterface>(
    Types.EventsResponse
  );

  const repository = container.get<EventRepository>(
    Types.EventRepository
  );

  return response;
}
