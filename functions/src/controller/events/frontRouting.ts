import express from 'express';
import GetEvents from './frontRouting/getEvents';
import PostEvents from './frontRouting/postEvents';
import validateEventQuery from './validate/validateQuery';
import validateEventsPostParam from './validate/validatePostParam';

const events = express.Router();

events.get('/', validateEventQuery, GetEvents);

events.post('/', validateEventsPostParam, PostEvents);

export default events;
