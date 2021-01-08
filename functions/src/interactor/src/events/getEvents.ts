import container from '../../../util/di/inversify.config';
import Types from '../../../util/di/types';
import EventRepository from '../../../domain/eventManager/src/repository/event/eventRepository';
import EventsQuery from '../InteractorObject/events/eventsQuery';
import EventAPIInterface from '../APIInterface/event/event';
import EmployeeFactory from '../../../domain/eventManager/src/entity/employee/employeeFactory';
import FacilityFactory from '../../../domain/eventManager/src/entity/facility/facilityFactory';

export default async function GetEvents(query: EventsQuery): Promise<EventAPIInterface[]> {
	const repository = container.get<EventRepository>(Types.EventRepository);

	const employee = query.userId ? new EmployeeFactory().create(query.userId) : undefined;
	const facility = query.facilityId ? new FacilityFactory().create(query.facilityId) : undefined;

	const collection = await repository.search(query.since, query.until, employee, facility);

	const result: EventAPIInterface[] = [];

	return collection.getData().map((event) => EventAPIInterface.fromDomainEvent(event));
}
