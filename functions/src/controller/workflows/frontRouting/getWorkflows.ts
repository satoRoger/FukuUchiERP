import express from "express";
import WorkflowAPIInterface from "../../../interactor/src/APIInterface/workflow/workflow";
import ValidateWorkflowsQuery from "../validate/validateQuery";
import { GetWorkflowsRouter } from "../backRouting";

export default async function GetWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[]>
) {
  const query = new ValidateWorkflowsQuery().createWithValid();

  if (query) {
    const response = await GetWorkflowsRouter(query);
    res.json(response);
  }
}
