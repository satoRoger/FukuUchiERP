import { DateTime } from "luxon";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";

export default class FacilitiesPostParam {
  constructor(readonly id: string, readonly name: string) {}
}
