import express from 'express';
import GetEvents from './frontRouting/getEvents';
import PostEvents from './frontRouting/postEvents';
import validateEventsPostParam from './validate/validatePostParam';
import validateEventsQuery from './validate/validateQuery';
import validateEventsPutParam from './validate/validatePutParam';
import PutEvents from '../workflows/frontRouting/putWorkflows';

const events = express.Router();

events.get('/', validateEventsQuery, GetEvents);

events.post('/', validateEventsPostParam, PostEvents);
events.put('/:workflowId', validateEventsPutParam, PutEvents);

export default events;
