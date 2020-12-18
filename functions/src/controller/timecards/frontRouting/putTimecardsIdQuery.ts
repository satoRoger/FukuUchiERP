import express from "express";
import { DateTime } from "luxon";
import { GetTimecardsFromAllUserRouter } from "../backRouting";
import ValidateTimecardsQuery from "../validate/validateQuery";

export default async function PutTimecardsIdQuery(
  req: express.Request,
  res: express.Response
) {
  res.send(req.params.timecardId);
}
