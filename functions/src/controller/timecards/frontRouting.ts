import express from "express";
import DeleteTimecardsIdQuery from "./frontRouting/deleteTimecardsIdQuery";
//import timecards from "../commonController";
import GetTimecards from "./frontRouting/getTimecards";
import PostTimecards from "./frontRouting/postTimecards";
import PutTimecardsIdQuery from "./frontRouting/putTimecardsIdQuery";
const timecards = express.Router();

timecards.get("/", validateTimecardsQuery,GetTimecards);

timecards.post("/", PostTimecards);

timecards.put("/:timecardId", PutTimecardsIdQuery);

timecards.delete("/:timecardId", DeleteTimecardsIdQuery);

export default timecards;
