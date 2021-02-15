import { DateTime } from "luxon";
import TypeValidateError from "../../../../controller/src/v1/error/typeValidateError";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
import { isString } from "../../../../util/isType/isType";

export default class FacilitiesDeleteParam {
  constructor(readonly id: string) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw TypeValidateError("userId", "string");
    }
  }
}
