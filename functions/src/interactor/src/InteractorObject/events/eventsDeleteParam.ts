import { DateTime } from "luxon";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
import { isString } from "../../../../util/isType/isType";

export default class EventsDeleteParam {
  readonly id: string;
  constructor(id: any) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw "";
    }
  }
}
