import express from "express";
import { DateTime } from "luxon";
import TimecardAPIInterface from "../../../interactor/src/APIInterface/timecard/timecard";
import { GetUserTimecardsRouter } from "../backRouting";
import ValidateUserTimecard from "../validate/validateUserTimecard";

export default async function GetUserTimecards(
  req: express.Request,
  res: express.Response<TimecardAPIInterface[]>
) {
  let userId: string = req.params.userId;

  let since: DateTime | undefined = undefined;
  let until: DateTime | undefined = undefined;

  if (typeof req.query.since === "string") {
    since = DateTime.fromISO(req.query.since);
  }
  if (typeof req.query.until === "string") {
    until = DateTime.fromISO(req.query.until);
  }

  const query = new ValidateUserTimecard(userId,since, until).createWithValid();

  if (query) {
    const response = await GetUserTimecardsRouter(query);
    res.json(response);
  }
}
