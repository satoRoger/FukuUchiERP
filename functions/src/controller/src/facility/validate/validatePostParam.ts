import { check, ValidationChain } from "express-validator";

const validateFacilitiesPostParam: ValidationChain[] = [
  check("id").notEmpty(),
  check("name").notEmpty(),
];

export default validateFacilitiesPostParam;
