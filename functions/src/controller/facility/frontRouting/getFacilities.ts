import express from "express";
import { DateTime } from "luxon";
import EventAPIInterface from "../../../interactor/src/APIInterface/event/event";
import FacilityAPIInterface from "../../../interactor/src/APIInterface/facility/facility";
import { GetFacilitiesRouter } from "../backRouting";
import ValidateFacilitiesQuery from "../validate/validateQuery";
import ValidateEventsQuery from "../validate/validateQuery";

export default async function GetFacilities(
  req: express.Request,
  res: express.Response<FacilityAPIInterface[]>
) {
  const query = new ValidateFacilitiesQuery().createWithValid();

  if (query) {
    const response = await GetFacilitiesRouter(query);
    res.json(response);
  }
}
