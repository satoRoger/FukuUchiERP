import express from 'express';
import { ValidationError, validationResult } from 'express-validator';
import { DateTime } from 'luxon';
import EventAPIInterface from '../../../interactor/src/APIInterface/event/event';
import EventsQuery from '../../../interactor/src/InteractorObject/events/eventsQuery';
import { GetEventsRouter } from '../backRouting';

export default async function GetEvents(
	req: express.Request,
	res: express.Response<EventAPIInterface[] | { errors: ValidationError[] }>
) {
	const { since, until, userId, facilityId } = req.query;
	const { userToken } = req.body;
	
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const query = new EventsQuery(since, until, userId, facilityId);

	const response = await GetEventsRouter(query);
	res.json(response);
}
