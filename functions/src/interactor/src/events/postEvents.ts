import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsPostParam from "../InteractorObject/events/eventsPostParam";
import EventAPIInterface from "../APIInterface/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";

export default async function PostEvents(
  param: EventsPostParam
): Promise<EventAPIInterface[]> {
  const repository = container.get<EventRepository>(Types.EventRepository);

  const newData = await repository.save(
    new EventFactory().create(
      "empty",
      param.type,
      param.start,
      param.end,
      param.title,
      param.userId,
      param.facilityId
    )
  );

  const response: EventAPIInterface = {
    id: newData.id.value,
    start: newData.start,
    end: newData.end,
    title: newData.title.value,
    type: newData.type,
    facilityId: newData.facilityId?.value,
    userId: newData.employeeId?.value,
  };

  const result: EventAPIInterface[] = [response];
  return result;
}
