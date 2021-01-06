const validateEventsPostParam = [
	check('userId').notEmpty(),
	check('cardType').notEmpty(),
	check('punchDate').notEmpty(),
	check('punchDate').isISO8601(),
];

export default validateEventsPostParam;
