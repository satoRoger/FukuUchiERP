import "reflect-metadata";
import { injectable } from "inversify";
import EventsObject from "./eventsObject";

@injectable()
export default abstract class EventsResponseInterface {
  abstract setResult: (result: EventsObject[]) => void;
  abstract parse: () => Array<Object>;
}
