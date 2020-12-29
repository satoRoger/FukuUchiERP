import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsResponseInterface from "../InteractorObject/events/eventsResponse";
import EventsQuery from "../InteractorObject/events/eventsQuery";
import EmployeeFactory from "../../../domain/attendanceManagement/src/entity/employee/employeeFactory";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EventAPIInterface from "../APIInterface/event/event";
import CoordinateAPIInterface from "../APIInterface/timecard/coordinate";

export default async function GetEvents(
  query: EventsQuery
): Promise<EventAPIInterface[]> {
  const repository = container.get<EventRepository>(
    Types.EventRepository
  );

  const result: EventAPIInterface[] = [];
  return result;
}
