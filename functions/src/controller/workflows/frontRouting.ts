import express from "express";
import GetWorkflows from "../../interactor/src/workflow/getWorkflows";
import PostWorkflows from "../events/frontRouting/postEvents";

const events = express.Router();

events.get("/", GetWorkflows);

events.post("/", PostWorkflows);

export default events;
