import { DateTime } from "luxon";
import TypeValidateError from "../../../../controller/src/v1/error/typeValidateError";
import {
  isCardType,
  isCoordinate,
} from "../../../../domain/attendanceManagement/src/service/utility/typeGuard";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import coordinate from "../../../../domain/attendanceManagement/src/valueObject/coordinate";
import {
  isISOString,
  isDateTime,
  isString,
  isNumber,
} from "../../../../util/isType/isType";

class TimecardsPostParam {
  readonly userId: string;
  readonly cardType: CardType;
  readonly punchDate: DateTime;
  readonly latitude?: number;
  readonly longitude?: number;
  constructor(
    userId: any,
    cardType: any,
    punchDate: any,
    latitude: any,
    longitude: any
  ) {
    if (isCardType(cardType)) {
      this.cardType = cardType;
    } else {
      throw TypeValidateError("cardType", "cardType");
    }

    if (isString(userId)) {
      this.userId = userId;
    } else {
      throw TypeValidateError("userId", "string");
    }

    if (isISOString(punchDate)) {
      this.punchDate = DateTime.fromISO(punchDate);
    } else if (isDateTime(punchDate)) {
      this.punchDate = punchDate;
    } else {
      throw TypeValidateError("punchDate", "date");
    }

    if (isNumber(latitude)) {
      this.latitude = latitude;
    }
    if (isNumber(longitude)) {
      this.longitude = longitude;
    }
  }
}

export default TimecardsPostParam;
