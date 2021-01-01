import express from "express";
import { DateTime } from "luxon";
import EventAPIInterface from '../../../interactor/src/APIInterface/event/event';
import { GetEventsRouter } from "../backRouting";
import ValidateEventsQuery from "../validate/validateQuery";

export default async function GetEvents(
  req: express.Request,
  res: express.Response<EventAPIInterface[]>
) {
  let since: DateTime | undefined = undefined;
  let until: DateTime | undefined = undefined;

  if (typeof req.query.since === "string") {
    since = DateTime.fromISO(req.query.since);
  }
  if (typeof req.query.until === "string") {
    until = DateTime.fromISO(req.query.until);
  }

  const query = new ValidateEventsQuery(since, until).createWithValid();

  if (query) {
    const response = await GetEventsRouter(query);
    res.json(response);
  }
}
