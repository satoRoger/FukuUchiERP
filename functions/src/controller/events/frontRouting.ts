import express from "express";
import GetEvents from "./frontRouting/getEvents";
import PostEvents from "./frontRouting/postEvents";
import validateEventsPostParam from "./validate/validatePostParam";
import validateEventsQuery from "./validate/validateQuery";
import validateEventsPutParam from "./validate/validatePutParam";
import PutEvents from "../workflows/frontRouting/putWorkflows";
import validateEventsDeleteParam from "./validate/validatDeleteParam";
import DeleteEvents from "./frontRouting/deleteEvents";

const events = express.Router();

events.get("/", validateEventsQuery, GetEvents);

events.post("/", validateEventsPostParam, PostEvents);
events.put("/:eventId", validateEventsPutParam, PutEvents);
events.delete("/:eventId", validateEventsDeleteParam, DeleteEvents);

export default events;
