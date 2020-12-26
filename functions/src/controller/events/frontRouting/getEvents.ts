import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import EventsObject from "../../../interactor/InteractorObject/events/eventsObject";
import EventsResponseInterface from "../../../interactor/InteractorObject/events/eventsResponse";
import UsersObject from "../../../interactor/InteractorObject/users/usersObject";
import WorkflowsResponseInterface from "../../../interactor/InteractorObject/workflows/workflowsResponse";
import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";

export default async function getEvents(): Promise<EventsResponseInterface> {
  const response = container.get<EventsResponseInterface>(Types.EventsResponse);

  const repository = container.get<EventRepository>(Types.EventRepository);

  const collection = await repository.search();
  const result: EventsObject[] = [];
  for (let {} of collection) {
    result.push(new UsersObject());
  }

  response.setResult(result);
  return response;
}
