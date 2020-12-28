import PostEvents from "../../interactor/events/postEvents";
import EventsPostParam from "../../interactor/InteractorObject/events/eventsPostParam";
import WorkflowsPostParam from "../../interactor/InteractorObject/workflows/workflowsPostParam";
import WorkflowsQuery from "../../interactor/InteractorObject/workflows/workflowsQuery";
import GetTimecarsFromAllUsers from "../../interactor/timecard/getTimecards";
import PostWorkflows from "../../interactor/workflow/postWorkflows";

export function GetEventsRouter(query: WorkflowsQuery) {
  return GetTimecarsFromAllUsers(query);
}

export function PostEventsRouter(param: EventsPostParam) {
  return PostEvents(param);
}
