import { check } from 'express-validator';

const validateEventQuery = [
    check("since").isISO8601(),
    check("until").isISO8601(),
    ];

export default validateEventQuery;