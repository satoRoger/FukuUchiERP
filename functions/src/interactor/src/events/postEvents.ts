import container from '../../../util/di/inversify.config';
import Types from '../../../util/di/types';
import EventRepository from '../../../domain/eventManager/src/repository/event/eventRepository';
import EventsPostParam from '../InteractorObject/events/eventsPostParam';
import EventAPIInterface from '../APIInterface/event/event';
import EventFactory from '../../../domain/eventManager/src/entity/event/eventFactory';

export default async function PostEvents(param: EventsPostParam): Promise<EventAPIInterface[]> {
	const repository = container.get<EventRepository>(Types.EventRepository);

	const saveEvent = new EventFactory().create(
		'empty',
		param.type,
		param.start,
		param.end,
		param.title,
		param.userId,
		param.facilityId
	);

	const savedData = await repository.save(saveEvent);

	const response: EventAPIInterface = EventAPIInterface.fromDomainEvent(savedData);
	const result: EventAPIInterface[] = [response];
	return result;
}
