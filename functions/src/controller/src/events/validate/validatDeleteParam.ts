import { check, ValidationChain } from "express-validator";

const validateEventsDeleteParam: ValidationChain[] = [
  check("eventId").notEmpty(),
];

export default validateEventsDeleteParam;
