import express from "express";
import { DateTime } from "luxon";
import { PostEventsRouter } from "../backRouting";
import ValidateEventsPostParam from "../validate/validatePostParam";

export default async function PostWorkflows(
  req: express.Request,
  res: express.Response
) {
  let type: string | undefined;
  let start: DateTime | undefined;
  let end: DateTime | undefined;
  let title: string | undefined;
  let userId: string | undefined;
  let facilityId: string | undefined;

  const request = req.body;

  if (typeof request.type === "string") {
    type = request.type;
  }
  if (typeof request.start === "string") {
    start = DateTime.fromISO(request.start);
  }

  if (typeof request.end === "string") {
    end = DateTime.fromISO(request.start);
  }

  if (typeof request.title === "string") {
    title = request.title;
  }

  if (typeof request.userId === "string") {
    userId = request.userId;
  }

  if (typeof request.facilityId === "string") {
    facilityId = request.facilityId;
  }

  const postParam = new ValidateEventsPostParam(
    type,
    start,
    end,
    title,
    userId,
    facilityId
  ).createWithValid();

  if (postParam) {
    const response = await PostEventsRouter(postParam);
    res.json(response);
  }
}
