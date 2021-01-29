import { check } from "express-validator";

const validateEventsQuery = [
  check("since").optional().isISO8601(),
  check("until").optional().isISO8601(),
];

export default validateEventsQuery;
