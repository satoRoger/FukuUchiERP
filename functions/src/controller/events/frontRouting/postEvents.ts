import express from "express";
import { DateTime } from "luxon";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import { PostEventsRouter } from "../backRouting";
import ValidateEventsPostParam from "../validate/validatePostParam";

export default async function PostEvents(
  req: express.Request,
  res: express.Response
) {
  let type: EventType | undefined;
  let start: DateTime | undefined;
  let end: DateTime | undefined;
  let title: string | undefined;
  let userId: string | undefined;
  let facilityIds: string[] | undefined;

  const request = req.body;

  console.log(request)
  if (
    request.type == EventType.FacilityHoliday ||
    request.type == EventType.UserVacation
  ) {
    type = request.type;
  }
  if (typeof request.start === "string") {
    start = DateTime.fromISO(request.start);
  }

  if (typeof request.end === "string") {
    end = DateTime.fromISO(request.end);
  }

  if (typeof request.title === "string") {
    title = request.title;
  }

  if (typeof request.userId === "string") {
    userId = request.userId;
  }

  if (typeof request.facilityIds != "undefined") {
    facilityIds = request.facilityIds;
  }

  const postParam = new ValidateEventsPostParam(
    type,
    start,
    end,
    title,
    userId,
    facilityIds
  ).createWithValid();

  if (postParam) {
    const response = await PostEventsRouter(postParam);
    res.json(response);
  }
}
