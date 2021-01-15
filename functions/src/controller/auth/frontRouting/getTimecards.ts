import express from "express";
import { GetTimecardsRouter } from "../backRouting";
import TimecardAPIInterface from "../../../interactor/src/APIInterface/timecard/timecard";
import TimecardsQuery from "../../../interactor/src/InteractorObject/timecards/timecardsQuery";

export default async function GetTimecards(
  req: express.Request,
  res: express.Response<TimecardAPIInterface[]>
) {
  const { since, until, userId } = req.query;

  const query = new TimecardsQuery(since, until, userId);

  const response = await GetTimecardsRouter(query);
  res.json(response);
}
