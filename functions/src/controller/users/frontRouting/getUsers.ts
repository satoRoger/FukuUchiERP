import express from "express";
import { DateTime } from "luxon";
import ValidateUsersQuery from "../validate/validateQuery";
import { GetUsersRouter } from "../backRouting";

export default async function GetUsers(
  req: express.Request,
  res: express.Response
) {
  const query = new ValidateUsersQuery().createWithValid();

  if (query) {
    const response = await GetUsersRouter(query);
    res.json(response.parse());
  }
}
