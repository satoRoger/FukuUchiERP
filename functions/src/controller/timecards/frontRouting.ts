import express from "express";
//import timecards from "../commonController";
import TimecardsQuery from "../../interactor/InteractorObject/timecardsQuery";
import { ValidateTimecardsQuery } from './validate';
import { GetTimecardsFromAllUserRouter } from './backRouting';
const timecards = express.Router();

timecards.get("/", (req: express.Request, res: express.Response) => {
  let since = undefined;
  let until = undefined;

  if (typeof req.params.since) {
    since = req.query.since as string;
  }
  if (typeof req.params.until) {
    until = req.query.until as string;
  }

  const query = new TimecardsQuery(since, until);

  if (ValidateTimecardsQuery(query)) {
    const response = GetTimecardsFromAllUserRouter(query);
    res.json(response)
  }

});
timecards.post("/", (req: express.Request, res: express.Response) => {
  res.send("Hello ExpressPUT!");
});

//parameter userId
timecards.get("/:timecardId", (req: express.Request, res: express.Response) => {
  res.send(req.params.timecardId);
});
timecards.put("/:timecardId", (req: express.Request, res: express.Response) => {
  res.send(req.params.timecardId);
});
timecards.delete(
  "/:timecardId",
  (req: express.Request, res: express.Response) => {
    res.send(req.params.timecardId);
  }
);

export default timecards;
