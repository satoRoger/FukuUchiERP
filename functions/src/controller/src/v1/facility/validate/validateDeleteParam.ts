import { check, ValidationChain } from "express-validator";

const validateFacilitiesDeleteParam: ValidationChain[] = [
  check("facilityId").notEmpty(),
];

export default validateFacilitiesDeleteParam;
