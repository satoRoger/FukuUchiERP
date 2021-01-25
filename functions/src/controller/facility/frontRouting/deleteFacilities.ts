import express from "express";
import { ValidationError, validationResult } from "express-validator";
import FacilityAPIInterface from "../../../interactor/src/APIInterface/facility/facility";
import FacilitiesDeleteParam from "../../../interactor/src/InteractorObject/facilities/facilitiesDeleteParam";
import FacilitiesPostParam from "../../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
import { DeleteFacilitiesRouter, PostFacilitiesRouter } from "../backRouting";
import ValidateFacilitiesPostParam from "../validate/validatePostParam";

export default async function DeleteFacilities(
  req: express.Request,
  res: express.Response<string | { errors: ValidationError[] }>
) {
  const { facilityId } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const postParam = new FacilitiesDeleteParam(facilityId);

  const response = await DeleteFacilitiesRouter(postParam);
  res.json(response);
}
