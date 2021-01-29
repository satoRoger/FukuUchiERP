import { check, ValidationChain } from "express-validator";

const validateWorkflowsDeleteParam: ValidationChain[] = [
  check("workflowId").notEmpty(),
];

export default validateWorkflowsDeleteParam;
