import GetEvents from "../../interactor/src/events/getEvents";
import PostEvents from "../../interactor/src/events/postEvents";
import EventsPostParam from "../../interactor/src/InteractorObject/events/eventsPostParam";
import EventsQuery from "../../interactor/src/InteractorObject/events/eventsQuery";

export function GetEventsRouter(query: EventsQuery) {
  return GetEvents(query);
}

export function PostEventsRouter(param: EventsPostParam) {
  return PostEvents(param);
}
