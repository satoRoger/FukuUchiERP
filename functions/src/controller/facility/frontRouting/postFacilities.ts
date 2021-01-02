import express from "express";
import { PostFacilitiesRouter } from "../backRouting";
import ValidateFacilitiesPostParam from "../validate/validatePostParam";

export default async function PostFacilities(
  req: express.Request,
  res: express.Response
) {
  let id: string | undefined;
  let name: string | undefined;

  const request = req.body;

  if (typeof request.id === "string") {
    id = request.id;
  }

  if (typeof request.name === "string") {
    name = request.name;
  }

  const postParam = new ValidateFacilitiesPostParam(id, name).createWithValid();

  if (postParam) {
    const response = await PostFacilitiesRouter(postParam);
    res.json(response);
  }
}
