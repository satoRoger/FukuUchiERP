import express from "express";
import DeleteTimecardsIdQuery from "./frontRouting/deleteTimecardsIdQuery";
//import timecards from "../commonController";
import GetTimecards from "./frontRouting/getTimecards";
import PostTimecards from "./frontRouting/postTimecards";
import PutTimecardsIdQuery from "./frontRouting/putTimecardsIdQuery";
import validateTimecardsQuery from "./validate/validateQuery";
import validateTimecardsPostParam from "./validate/validatePostParam";
import validateTimecardsPutParam from "./validate/validatePutParam";
import validateTimecardsDeleteParam from "./validate/validatedeleteParam";
const timecards = express.Router();

timecards.get("/", validateTimecardsQuery, GetTimecards);

timecards.post("/", validateTimecardsPostParam, PostTimecards);

timecards.put("/:timecardId", validateTimecardsPutParam, PutTimecardsIdQuery);

timecards.delete(
  "/:timecardId",
  validateTimecardsDeleteParam,
  DeleteTimecardsIdQuery
);

export default timecards;
