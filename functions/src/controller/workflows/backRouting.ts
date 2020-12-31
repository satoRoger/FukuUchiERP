import TimecardsPostParam from "../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import WorkflowsPostParam from "../../interactor/src/InteractorObject/workflows/workflowsPostParam";
import WorkflowsQuery from "../../interactor/src/InteractorObject/workflows/workflowsQuery";
import GetWorkflows from "../../interactor/src/workflow/getWorkflows";
import PostWorkflows from "../../interactor/src/workflow/postWorkflows";

export function GetWorkflowsRouter(query: WorkflowsQuery) {
  return GetWorkflows(query);
}

export function PostWorkflowRouter(param: WorkflowsPostParam) {
  return PostWorkflows(param);
}
