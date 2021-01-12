import express from "express";
import { DateTime } from "luxon";
import { PostWorkflowRouter } from "../backRouting";
import ValidateWorkflowsPostParam from "../validate/validatePostParam";
import WorkflowType from "../../../domain/workflow/src/valueObject/workflowType";
import WorkflowAPIInterface from "../../../interactor/src/APIInterface/workflow/workflow";
import WorkflowsPostParam from "../../../interactor/src/InteractorObject/workflows/workflowsPostParam";
import { ValidationError, validationResult } from "express-validator";

export default async function PostWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[] | { errors: ValidationError[] }>
) {
  try {
    const {
      type,
      drafterId,
      approverListId,
      petitionDate,
      vacationDate,
    } = req.body;

    const postParam = new WorkflowsPostParam(
      drafterId,
      approverListId,
      petitionDate,
      type,
      vacationDate
    );
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const response = await PostWorkflowRouter(postParam);
    res.json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
}
