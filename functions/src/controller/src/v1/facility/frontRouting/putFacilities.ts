import express from "express";
import { ValidationError, validationResult } from "express-validator";
import FacilityAPIInterface from "../../../../../interactor/src/APIInterface/facility/facility";
import FacilitiesPostParam from "../../../../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
import FacilitiesPutParam from "../../../../../interactor/src/InteractorObject/facilities/facilitiesPutParam";
import { PostFacilitiesRouter, PutFacilitiesRouter } from "../backRouting";
import ValidateFacilitiesPostParam from "../validate/validatePostParam";

export default async function PutFacilities(
  req: express.Request,
  res: express.Response<FacilityAPIInterface[] | { errors: ValidationError[] }>
) {
  const { facilityId, name } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const postParam = new FacilitiesPutParam(facilityId, name);

  const response = await PutFacilitiesRouter(postParam);
  res.json(response);
}
