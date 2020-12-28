import TimecardsPostParam from "../../interactor/InteractorObject/timecards/timecardsPostParam";
import TimecardsQuery from "../../interactor/InteractorObject/timecards/timecardsQuery";
import WorkflowsPostParam from "../../interactor/InteractorObject/workflows/workflowsPostParam";
import WorkflowsQuery from "../../interactor/InteractorObject/workflows/workflowsQuery";
import GetTimecarsFromAllUsers from "../../interactor/timecard/getTimecards";
import PostWorkflows from "../../interactor/workflow/postWorkflows";

export function GetWorkflowsRouter(query: WorkflowsQuery) {
  return GetTimecarsFromAllUsers(query);
}

export function PostWorkflowRouter(param: WorkflowsPostParam) {
  return PostWorkflows(param);
}
