import express from "express";
import GetEvents from "./frontRouting/getEvents";
import PostEvents from "./frontRouting/postEvents";


const events = express.Router();

events.get("/", GetEvents);

events.post("/", PostEvents);

export default events;
