import express from "express";
import { DateTime } from "luxon";

export default async function GetUserById(
  req: express.Request,
  res: express.Response
) {
  res.send(req.params.timecardId);
}
