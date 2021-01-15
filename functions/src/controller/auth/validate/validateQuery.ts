import { check } from 'express-validator';

const validateTimecardsQuery = [
    check("since").isISO8601(),
    check("until").isISO8601(),
    ];

export default validateTimecardsQuery;