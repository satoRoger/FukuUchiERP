import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UsersObject from "../../../interactor/InteractorObject/users/usersObject";
import WorkflowsResponseInterface from "../../../interactor/InteractorObject/workflows/workflowsResponse";
import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";

export default async function getEvents(): Promise<EventsResponseInterface> {
  const response = container.get<EventsResponseInterface>(
    Types.EventsResponse
  );

  const repository = container.get<eventRepository>(Types.EventRepository);

  const collection = await repository.search();
  const result: EventsObject[] = [];
  for (let {} of collection) {
    result.push(new UsersObject());
  }

  response.setResult(result);
  return response;
}
