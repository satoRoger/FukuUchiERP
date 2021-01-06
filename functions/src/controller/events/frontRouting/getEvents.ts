import express from "express";
import { DateTime } from "luxon";
import EventAPIInterface from '../../../interactor/src/APIInterface/event/event';
import { GetEventsRouter } from "../backRouting";
import ValidateEventsQuery from "../validate/validateQuery";

export default async function GetEvents(
  req: express.Request,
  res: express.Response<EventAPIInterface[]>
) {
  const {since:string|undefined,until:string|undefined,userId:string|undefined,facilityId:string|undefined} = req.query;
	
  const query = new EventsQuery(since,until,userId,facilityId);

  const response = await GetEventsRouter(query);
  res.json(response);
}
