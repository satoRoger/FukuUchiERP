import express from "express";
import WorkflowAPIInterface from "../../../../interactor/src/APIInterface/workflow/workflow";
import ValidateWorkflowsQuery from "../validate/validateQuery";
import { GetWorkflowsRouter } from "../backRouting";
import WorkflowsQuery from "../../../../interactor/src/InteractorObject/workflows/workflowsQuery";
import { ValidationError, validationResult } from "express-validator";

export default async function GetWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[] | { errors: ValidationError[] }>
) {
  const { drafterId, approverId } = req.query;

  const query = new WorkflowsQuery({
    drafterId: drafterId,
    approverId: approverId,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const response = await GetWorkflowsRouter(query);
  res.json(response);
}
