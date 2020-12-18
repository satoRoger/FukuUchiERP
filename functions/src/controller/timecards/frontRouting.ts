import express from "express";
import DeleteTimecardsIdQuery from "./frontRouting/deleteTimecardsIdQuery";
//import timecards from "../commonController";
import GetTimecards from "./frontRouting/getTimecards";
import GetTimecardsIdQuery from "./frontRouting/getTimecardsIdQuery";
import PostTimecards from "./frontRouting/postTimecards";
import PutTimecardsIdQuery from "./frontRouting/putTimecardsIdQuery";
const timecards = express.Router();

timecards.get("/", GetTimecards);

timecards.get("/:timecardId", GetTimecardsIdQuery);

timecards.post("/", PostTimecards);

timecards.put("/:timecardId", PutTimecardsIdQuery);

timecards.delete("/:timecardId", DeleteTimecardsIdQuery);

export default timecards;
