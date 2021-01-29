import DeleteEvents from "../../../../interactor/src/events/deleteEvents";
import GetEvents from "../../../../interactor/src/events/getEvents";
import PostEvents from "../../../../interactor/src/events/postEvents";
import PutEvents from "../../../../interactor/src/events/putEvents";
import EventsDeleteParam from "../../../../interactor/src/InteractorObject/events/eventsDeleteParam";
import EventsPostParam from "../../../../interactor/src/InteractorObject/events/eventsPostParam";
import EventsPutParam from "../../../../interactor/src/InteractorObject/events/eventsPutParam";
import EventsQuery from "../../../../interactor/src/InteractorObject/events/eventsQuery";

export function GetEventsRouter(query: EventsQuery) {
  return GetEvents(query);
}

export function PostEventsRouter(param: EventsPostParam) {
  return PostEvents(param);
}
export function PutEventsRouter(param: EventsPutParam) {
  return PutEvents(param);
}
export function DeleteEventsRouter(param: EventsDeleteParam) {
  return DeleteEvents(param);
}
