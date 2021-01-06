import { check } from 'express-validator';

const validateEventsPostParam = [
	check('type').notEmpty(),
	check('start').notEmpty(),
	check('start').isISO8601(),
	check('end').notEmpty(),
	check('end').isISO8601(),
	check('title').notEmpty(),
];

export default validateEventsPostParam;
