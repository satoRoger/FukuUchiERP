import express from "express";
import EventAPIInterface from "../../../../../interactor/src/APIInterface/event/event";
import { PostEventsRouter } from "../../events/backRouting";
import EventsPostParam from "../../../../../interactor/src/InteractorObject/events/eventsPostParam";
import { ValidationError, validationResult } from "express-validator";
import WorkflowsPutParam from "../../../../../interactor/src/InteractorObject/workflows/workflowsPutParam";
import { DeleteWorkflowRouter, PutWorkflowRouter } from "../backRouting";
import WorkflowAPIInterface from "../../../../../interactor/src/APIInterface/workflow/workflow";
import WorkflowsDeleteParam from "../../../../../interactor/src/InteractorObject/workflows/workflowsDeleteParam";

export default async function DeleteWorkflows(
  req: express.Request,
  res: express.Response<string | { errors: ValidationError[] }>
) {
  const { workflowId } = req.params;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const postParam = new WorkflowsDeleteParam(workflowId);

  const response = await DeleteWorkflowRouter(postParam);
  res.json(response);
}
