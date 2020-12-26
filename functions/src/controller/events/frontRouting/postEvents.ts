import express from "express";
import { DateTime } from "luxon";
import { PostEventsRouter } from "../backRouting";
import ValidateEventsPostParam from '../validate/validatePostParam';

export default async function PostWorkflows(
  req: express.Request,
  res: express.Response
) {
  let type: string | undefined;
  let vacationDate: DateTime | undefined;

  const request = JSON.parse(req.body);

  if (typeof request.type === "string") {
    type = request.type;
  }
  if (typeof request.vacationDate === "string") {
    vacationDate = request.vacationDate;
  }

  const postParam = new ValidateEventsPostParam(
  ).createWithValid();

  if (postParam) {
    const response = await PostEventsRouter(postParam);
    res.json(response.parse());
  }
}
