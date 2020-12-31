import express from "express";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowAPIInterface from "../../../interactor/src/APIInterface/workflow/workflow";
import UsersObject from "../../../interactor/src/InteractorObject/users/usersObject";
import WorkflowsResponseInterface from "../../../interactor/src/InteractorObject/workflows/workflowsResponse";
import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import ValidateWorkflowsQuery from "../validate/validateQuery";
import { GetWorkflowsRouter } from "../backRouting";

export default async function getWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[]>
) {
  const query = new ValidateWorkflowsQuery().createWithValid();

  if (query) {
    const response = await GetWorkflowsRouter(query);
    res.json(response);
  }
}
