import express from 'express';
import EventAPIInterface from '../../../interactor/src/APIInterface/event/event';
import { PostEventsRouter } from '../backRouting';
import EventsPostParam from '../../../interactor/src/InteractorObject/events/eventsPostParam';
import { ValidationError, validationResult } from 'express-validator';

export default async function PostEvents(
	req: express.Request,
	res: express.Response<EventAPIInterface[] | { errors: ValidationError[] }>
) {
	const { type, start, end, title, userId, facilityId } = req.body;
	const { userToken } = req.body;

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const postParam = new EventsPostParam(type, start, end, title, userId, facilityId);

	const response = await PostEventsRouter(postParam);
	res.json(response);
}
