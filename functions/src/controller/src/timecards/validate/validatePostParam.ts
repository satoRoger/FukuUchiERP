import { check } from "express-validator";

const validateTimecardsPostParam = [
  check("userId").notEmpty(),
  check("cardType").notEmpty(),
  check("punchDate").notEmpty(),
  check("punchDate").isISO8601(),
];

export default validateTimecardsPostParam;
