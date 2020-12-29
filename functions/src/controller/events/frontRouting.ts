import express from "express";
import GetEvents from "../../interactor/src/events/getEvents";
import PostEvents from "../../interactor/src/events/postEvents";

const events = express.Router();

events.get("/", GetEvents);

events.post("/", PostEvents);

export default events;
