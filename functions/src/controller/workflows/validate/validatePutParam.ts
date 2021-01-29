import { check, ValidationChain } from "express-validator";

const validateWorkflowsPutParam: ValidationChain[] = [
  check("workflowId").notEmpty(),
];

export default validateWorkflowsPutParam;
