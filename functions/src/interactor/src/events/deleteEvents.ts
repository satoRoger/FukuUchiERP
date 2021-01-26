import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsDeleteParam from "../InteractorObject/events/eventsDeleteParam";
import EventId from "../../../domain/eventManager/src/valueObject/eventId";

export default async function DeleteEvents(
  param: EventsDeleteParam
): Promise<string> {
  const repository = container.get<EventRepository>(Types.EventRepository);
  const id: EventId = new EventId(param.id);
  await repository.remove(id);
  return id.value;
}
