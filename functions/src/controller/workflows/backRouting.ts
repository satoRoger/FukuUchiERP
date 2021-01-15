import TimecardsPostParam from "../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import WorkflowsPostParam from "../../interactor/src/InteractorObject/workflows/workflowsPostParam";
import WorkflowsPutParam from "../../interactor/src/InteractorObject/workflows/workflowsPutParam";
import WorkflowsQuery from "../../interactor/src/InteractorObject/workflows/workflowsQuery";
import GetWorkflows from "../../interactor/src/workflow/getWorkflows";
import PostWorkflows from "../../interactor/src/workflow/postWorkflows";
import PutWorkflows from "../../interactor/src/workflow/putWorkflows";

export function GetWorkflowsRouter(query: WorkflowsQuery) {
  return GetWorkflows(query);
}

export function PostWorkflowRouter(param: WorkflowsPostParam) {
  return PostWorkflows(param);
}

export function PutWorkflowRouter(param: WorkflowsPutParam) {
  return PutWorkflows(param);
}