import express from "express";
import { DateTime } from "luxon";
import { PostWorkflowRouter } from "../backRouting";
import ValidateWorkflowsPostParam from "../validate/validatePostParam";
import WorkflowType from "../../../domain/workflow/src/valueObject/workflowType";
import WorkflowAPIInterface from "../../../interactor/src/APIInterface/workflow/workflow";

export default async function PostWorkflows(
  req: express.Request,
  res: express.Response<WorkflowAPIInterface[]>
) {
  let type: WorkflowType | undefined;
  let drafterId: string | undefined;
  let approversId: string | undefined;
  let petitionDate: DateTime | undefined;
  let vacationDate: DateTime | undefined;

  const request = req.body;

  if (request.type === WorkflowType.paidVacation) {
    type = request.type;
  }

  if (typeof request.drafterId === "string") {
    drafterId = request.drafterId;
  }

  if (typeof request.approversId === "string") {
    approversId = request.approversId;
  }

  if (typeof request.petitionDate === "string") {
    petitionDate = DateTime.fromISO(request.petitionDate);
  }

  if (typeof request.vacationDate === "string") {
    vacationDate = DateTime.fromISO(request.vacationDate);
  }

  const postParam = new ValidateWorkflowsPostParam(
    type,
    drafterId,
    approversId,
    petitionDate,
    vacationDate
  ).createWithValid();

  if (postParam) {
    const response = await PostWorkflowRouter(postParam);
    res.json(response);
  }
}
