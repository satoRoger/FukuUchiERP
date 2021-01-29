import express from "express";
import { ValidationError, validationResult } from "express-validator";
import FacilityAPIInterface from "../../../../interactor/src/APIInterface/facility/facility";
import FacilitiesPostParam from "../../../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
import { PostFacilitiesRouter } from "../backRouting";
import ValidateFacilitiesPostParam from "../validate/validatePostParam";

export default async function PostFacilities(
  req: express.Request,
  res: express.Response<FacilityAPIInterface[] | { errors: ValidationError[] }>
) {
  const { id, name } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const postParam = new FacilitiesPostParam(id, name);

  const response = await PostFacilitiesRouter(postParam);
  res.json(response);
}
