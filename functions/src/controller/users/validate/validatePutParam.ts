import { check } from "express-validator";

const validateUsersPutParam = [
  check("rollType").notEmpty(),
  check("mail").notEmpty(),
  check("fullname").notEmpty(),
  check("birthdate").optional().isISO8601(),
  check("hireDate").optional().isISO8601(),
  check("leaveDate").optional().isISO8601(),
];

export default validateUsersPutParam;
