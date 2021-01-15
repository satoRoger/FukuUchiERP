import express from "express";
import { ValidationError } from "express-validator";
import { validationResult } from "express-validator/src/validation-result";
import TimecardAPIInterface from "../../../interactor/src/APIInterface/timecard/timecard";
import TimecardsPostParam from "../../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import { PostTimecardRouter } from "../backRouting";

export default async function PostTimecards(
  req: express.Request,
  res: express.Response<TimecardAPIInterface[] | { errors: ValidationError[] }>
) {
  try {
    const { userId, date, cardType, latitude, longitude } = req.body;

    const postParam = new TimecardsPostParam(
      userId,
      cardType,
      date,
      latitude,
      longitude
    );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const response = await PostTimecardRouter(postParam);
    res.json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
}
