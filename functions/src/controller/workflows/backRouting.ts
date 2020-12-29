import TimecardsPostParam from "../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import WorkflowsPostParam from "../../interactor/src/InteractorObject/workflows/workflowsPostParam";
import WorkflowsQuery from "../../interactor/src/InteractorObject/workflows/workflowsQuery";
import GetTimecarsFromAllUsers from "../../interactor/src/timecard/getTimecards";
import PostWorkflows from "../../interactor/src/workflow/postWorkflows";

export function GetWorkflowsRouter(query: WorkflowsQuery) {
  return GetTimecarsFromAllUsers(query);
}

export function PostWorkflowRouter(param: WorkflowsPostParam) {
  return PostWorkflows(param);
}
