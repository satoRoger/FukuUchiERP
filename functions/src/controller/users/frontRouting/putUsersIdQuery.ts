import express from "express";

export default async function FrontRoutingPutUsersIdQuery(
  req: express.Request,
  res: express.Response
) {
  res.send(req.params.timecardId);
}
