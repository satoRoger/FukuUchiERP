import { check } from 'express-validator';

const validateEventsQuery = [
    check("since").isISO8601(),
    check("until").isISO8601(),
    ];

export default validateEventsQuery;