import express from "express";
import EventAPIInterface from "../../../interactor/src/APIInterface/event/event";
import { DeleteEventsRouter, PostEventsRouter } from "../backRouting";
import EventsPostParam from "../../../interactor/src/InteractorObject/events/eventsPostParam";
import { ValidationError, validationResult } from "express-validator";
import EventsDeleteParam from "../../../interactor/src/InteractorObject/events/eventsDeleteParam";

export default async function DeleteEvents(
  req: express.Request,
  res: express.Response<string | { errors: ValidationError[] }>
) {
  const { eventId } = req.params;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const deleteParam = new EventsDeleteParam(eventId);

  const response = await DeleteEventsRouter(deleteParam);
  res.json(response);
}
