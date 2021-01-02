import { DateTime } from "luxon";
import { textChangeRangeIsUnchanged } from "typescript";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import EventsPostParam from "../../../interactor/src/InteractorObject/events/eventsPostParam";
import FacilitiesPostParam from "../../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
export default class ValidateFacilitiesPostParam {
  constructor(private id?: string, private name?: string) {}

  createWithValid(): FacilitiesPostParam | undefined {
    if (this.id && this.name) {
      return new FacilitiesPostParam(this.id, this.name);
    } else {
      return undefined;
    }
  }
}
