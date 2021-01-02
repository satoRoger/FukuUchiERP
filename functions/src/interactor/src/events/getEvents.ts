import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsQuery from "../InteractorObject/events/eventsQuery";
import EventAPIInterface from "../APIInterface/event/event";
import Employee from "../../../domain/eventManager/src/entity/employee/employee";
import EmployeeId from "../../../domain/eventManager/src/valueObject/employeeId";
import Facility from "../../../domain/eventManager/src/entity/facility/facility";
import FacilityId from "../../../domain/eventManager/src/valueObject/facilityId";

export default async function GetEvents(
  query: EventsQuery
): Promise<EventAPIInterface[]> {
  const repository = container.get<EventRepository>(Types.EventRepository);
  const employee: Employee | undefined = query.userId
    ? new Employee(new EmployeeId(query.userId))
    : undefined;
  const facility: Facility | undefined = query.facilityId
    ? new Facility(new FacilityId(query.facilityId))
    : undefined;

  const collection = await repository.search(
    query.since,
    query.until,
    employee,
    facility
  );

  const result: EventAPIInterface[] = [];

  for (let event of collection) {
    const e: EventAPIInterface = {
      id: event.id.value,
      start: event.start,
      end: event.end,
      title: event.title.value,
      type: event.type,
      facilityIds: event.facilityIds?.map((id) => id.value),
      userId: event.employeeId?.value,
    };
    result.push(e);
  }

  return result;
}
