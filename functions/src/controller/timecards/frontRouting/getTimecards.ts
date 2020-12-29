import express from "express";
import { DateTime } from "luxon";
import { GetTimecardsRouter } from "../backRouting";
import ValidateTimecardsQuery from "../validate/validateQuery";
import TimecardAPIInterface from "../../../interactor/src/APIInterface/timecard/timecard";

export default async function GetTimecards(
  req: express.Request,
  res: express.Response<TimecardAPIInterface[]>
) {
  let since: DateTime | undefined = undefined;
  let until: DateTime | undefined = undefined;

  if (typeof req.query.since === "string") {
    since = DateTime.fromISO(req.query.since);
  }
  if (typeof req.query.until === "string") {
    until = DateTime.fromISO(req.query.until);
  }

  const query = new ValidateTimecardsQuery(since, until).createWithValid();

  if (query) {
    const response = await GetTimecardsRouter(query);
    res.json(response);
  }
}
