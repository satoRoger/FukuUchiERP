import { check, ValidationChain } from "express-validator";

const validateFacilitiesDeleteParam: ValidationChain[] = [
  check("id").notEmpty(),
];

export default validateFacilitiesDeleteParam;
