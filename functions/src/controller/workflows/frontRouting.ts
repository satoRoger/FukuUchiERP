import express from "express";
import GetWorkflows from "./frontRouting/getWorkflows";
import PostWorkflows from "./frontRouting/postWorkflows";
import validateWorkflowsQuery from "./validate/validateQuery";
import validateWorkflowsPostParam from "./validate/validatePostParam";
import PutWorkflows from "./frontRouting/putWorkflows";
import validateWorkflowsPutParam from "./validate/validatePutParam";

const workflows = express.Router();

workflows.get("/", validateWorkflowsQuery, GetWorkflows);

workflows.post("/", validateWorkflowsPostParam, PostWorkflows);
workflows.put("/:workflowId", validateWorkflowsPutParam, PutWorkflows);

export default workflows;
