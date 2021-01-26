import express from "express";
import EventAPIInterface from "../../../interactor/src/APIInterface/event/event";
import { PostEventsRouter, PutEventsRouter } from "../backRouting";
import EventsPostParam from "../../../interactor/src/InteractorObject/events/eventsPostParam";
import { ValidationError, validationResult } from "express-validator";
import EventsPutParam from "../../../interactor/src/InteractorObject/events/eventsPutParam";

export default async function PutEvents(
  req: express.Request,
  res: express.Response<
    EventAPIInterface[] | {} | { errors: ValidationError[] }
  >
) {
  try {
    const { type, start, end, title, userId, facilityId } = req.body;
    const { eventId } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const putParam = new EventsPutParam(
      eventId,
      type,
      start,
      end,
      title,
      userId,
      facilityId
    );

    const response = await PutEventsRouter(putParam);
    res.json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
}
