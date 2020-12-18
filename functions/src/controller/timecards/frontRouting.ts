import express from "express";
//import timecards from "../commonController";
import TimecardsQuery from "../../interactor/InteractorObject/timecards/timecardsQuery";
import {
  GetTimecardsFromAllUserRouter,
  PostTimecardRouter,
} from "./backRouting";
import { DateTime } from "luxon";
import CardType from "../../domain/attendanceManagement/src/valueObject/cardtype";
import TimecardsPostParam from "../../interactor/InteractorObject/timecards/timecardsPostParam";
import ValidateTimecardsQuery from "./validate/validateQuery";
import ValidateTimecardsPostParam from "./validate/validatePostParam";
const timecards = express.Router();

timecards.get("/", async (req: express.Request, res: express.Response) => {
  let since: DateTime | undefined = undefined;
  let until: DateTime | undefined = undefined;

  console.log(req.query.since);

  if (typeof req.query.since === "string") {
    since = DateTime.fromISO(req.query.since);
  }
  if (typeof req.query.until === "string") {
    until = DateTime.fromISO(req.query.until);
  }

  const query = new ValidateTimecardsQuery(since, until).createWithValid();

  if (query) {
    const response = await GetTimecardsFromAllUserRouter(query);
    res.json(response.parse());
  }
});

timecards.post("/", async (req: express.Request, res: express.Response) => {
  let userId: string | undefined;
  let date: DateTime | undefined;
  let cardType: CardType | undefined;
  let latitude: number | undefined;
  let longitude: number | undefined;

  const request = JSON.parse(req.body);
  console.log(request.userId);
  console.log(request.date);
  console.log(request.cardType);
  console.log(request.latitude);
  console.log(request.longitude);

  if (typeof request.userId === "string") {
    userId = request.userId;
  }
  if (typeof request.date === "string") {
    date = DateTime.fromISO(request.date);
  }
  if (
    request.cardType === CardType.Attendance ||
    request.cardType === CardType.Leavework ||
    request.cardType === CardType.Takebreak ||
    request.cardType === CardType.Endbreak
  ) {
    cardType = request.cardType;
  }
  if (typeof request.latitude === "number") {
    latitude = request.latitude;
  }
  if (typeof request.longitude === "number") {
    longitude = request.longitude;
  }

  const postParam = new ValidateTimecardsPostParam(
    userId,
    cardType,
    date,
    latitude,
    longitude
  ).createWithValid();

  if (postParam) {
    const response = await PostTimecardRouter(postParam);
    res.json(response.parse());
  }
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
