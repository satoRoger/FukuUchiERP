import { injectable } from "inversify";
import EventsObject from "../../interactor/src/InteractorObject/events/eventsObject";
import EventsResponseInterface from "../../interactor/src/InteractorObject/events/eventsResponse";

@injectable()
export default class EventsResponse implements EventsResponseInterface {
  private result?: EventsObject[];

  setResult = (result: EventsObject[]) => {
    this.result = result;
  };
  parse = () => {
    if (this.result) {
      return this.result.map(() => {
        return {};
      });
    } else {
      return [];
    }
  };
}
