import express from "express";
import GetWorkflows from "./frontRouting/getWorkflows";
import PostWorkflows from "./frontRouting/postWorkflows";
import validateWorkflowsQuery from "./validate/validateQuery";
import validateWorkflowsPostParam from "./validate/validatePostParam";

const workflows = express.Router();

workflows.get("/", validateWorkflowsQuery, GetWorkflows);

workflows.post("/", validateWorkflowsPostParam, PostWorkflows);

export default workflows;
