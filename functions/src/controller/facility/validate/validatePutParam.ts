import { check, ValidationChain } from "express-validator";

const validateFacilitiesPutParam: ValidationChain[] = [
  check("id").notEmpty(),
  check("name").notEmpty(),
];

export default validateFacilitiesPutParam;
