import express from "express";
import GetWorkflows from "./frontRouting/getWorkflows";
import PostWorkflows from "./frontRouting/postWorkflows";

const workflows = express.Router();

workflows.get("/", GetWorkflows);

workflows.post("/", PostWorkflows);

export default workflows;
