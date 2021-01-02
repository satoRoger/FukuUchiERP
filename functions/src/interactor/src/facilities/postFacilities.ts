import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsPostParam from "../InteractorObject/events/eventsPostParam";
import EventAPIInterface from "../APIInterface/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";

export default async function PostFacilities(
  param: FacilitiesPostParam
): Promise<FacilityAPIInterface[]> {
  const repository = container.get<FacilityRepository>(Types.FacilitytRepository);

  const newData = await repository.save(
    new EventFactory().create(
      "empty",
      param.type,
      param.start,
      param.end,
      param.title,
      param.userId,
      param.facilityIds
    )
  );

  const response: EventAPIInterface = {
    id: newData.id.value,
    start: newData.start,
    end: newData.end,
    title: newData.title.value,
    type: newData.type,
    facilityIds: newData.facilityIds?.map((id) => {
      return id.value;
    }),
    userId: newData.employeeId?.value,
  };

  const result: EventAPIInterface[] = [response];
  return result;
}
