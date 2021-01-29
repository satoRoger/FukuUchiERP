import { check, ValidationChain } from "express-validator";

const validateEventsPutParam: ValidationChain[] = [
  check("eventId").notEmpty(),
  check("type").notEmpty(),
  check("start").notEmpty(),
  check("start").isISO8601(),
  check("end").notEmpty(),
  check("end").isISO8601(),
  check("title").notEmpty(),
];

export default validateEventsPutParam;
