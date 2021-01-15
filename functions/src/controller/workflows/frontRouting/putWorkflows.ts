import express from "express";
import EventAPIInterface from "../../../interactor/src/APIInterface/event/event";
import { PostEventsRouter } from "../../events/backRouting";
import EventsPostParam from "../../../interactor/src/InteractorObject/events/eventsPostParam";
import { ValidationError, validationResult } from "express-validator";
import WorkflowsPutParam from "../../../interactor/src/InteractorObject/workflows/workflowsPutParam";
import { PutWorkflowRouter } from "../backRouting";
import WorkflowAPIInterface from "../../../interactor/src/APIInterface/workflow/workflow";

export default async function PutWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[] | { errors: ValidationError[] }>
) {
  const { action } = req.body;
  const { workflowId } = req.params;
  const { userToken } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const postParam = new WorkflowsPutParam(workflowId, action);

  const response = await PutWorkflowRouter(postParam);
  res.json(response);
}
