import express from "express";
import { DateTime } from "luxon";
import ValidateUsersQuery from "../validate/validateQuery";
import { GetUsersRouter } from "../backRouting";

export default async function FrontRoutingGetUsers(
  req: express.Request,
  res: express.Response
) {
  let since: DateTime | undefined = undefined;
  let until: DateTime | undefined = undefined;

  if (typeof req.query.since === "string") {
    since = DateTime.fromISO(req.query.since);
  }
  if (typeof req.query.until === "string") {
    until = DateTime.fromISO(req.query.until);
  }

  const query = new ValidateUsersQuery(since, until).createWithValid();

  if (query) {
    const response = await GetUsersRouter(query);
    res.json(response.parse());
  }
}
