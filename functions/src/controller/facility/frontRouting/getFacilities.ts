import express from "express";
import { DateTime } from "luxon";
import EventAPIInterface from '../../../interactor/src/APIInterface/event/event';
import { GetEventsRouter } from "../backRouting";
import ValidateEventsQuery from "../validate/validateQuery";

export default async function GetFacilities(
  req: express.Request,
  res: express.Response<EventAPIInterface[]>
) {
  const query = new ValidateFacilitiesQuery().createWithValid();

  if (query) {
    const response = await GetFacilitiesRouter(query);
    res.json(response);
  }
}
