import { check } from "express-validator";

const validateTimecardsPutParam = [
  check("userId").notEmpty(),
  check("cardType").notEmpty(),
  check("date").notEmpty(),
  check("date").isISO8601(),
];

export default validateTimecardsPutParam;
