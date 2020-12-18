import express from "express";
import { DateTime } from "luxon";

export default async function DeleteTimecardsIdQuery(
  req: express.Request,
  res: express.Response
) {
  res.send(req.params.timecardId);
}
