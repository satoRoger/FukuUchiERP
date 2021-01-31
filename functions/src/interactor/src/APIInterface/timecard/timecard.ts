import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";
import {
  isCardType,
  isCoordinate,
} from "../../../../domain/attendanceManagement/src/service/utility/typeGuard";
import { DateTime } from "luxon";
import {
  isISOString,
  isDateTime,
  isString,
} from "../../../../util/isType/isType";
import Coordinate from "../../../../domain/attendanceManagement/src/valueObject/coordinate";
import Timecard from "../../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TypeValidateError from "../../../../controller/src/v1/error/typeValidateError";
import { typeConstraint } from "inversify";

export default class TimecardAPIInterface {
  readonly id: string;
  readonly cardType: CardType;
  readonly userId: string;
  readonly date: string;
  readonly coordinate?: Coordinate;

  static fromDomainTimecard(timecard: Timecard) {
    return new TimecardAPIInterface(
      timecard.id.value,
      timecard.cardtype,
      timecard.punchEmployeeId.value,
      timecard.punchDate.toISO(),
      timecard.coordinate
    );
  }

  constructor(
    id: any,
    cardType: any,
    userId: any,
    date: any,
    coordinate?: any
  ) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw TypeValidateError("id", "string");
    }

    if (isCardType(cardType)) {
      this.cardType = cardType;
    } else {
      throw TypeValidateError("cartType", "cardType");
    }

    if (isString(userId)) {
      this.userId = userId;
    } else {
      throw TypeValidateError("userId", "string");
    }

    if (isISOString(date)) {
      this.date = date;
    } else if (isDateTime(date)) {
      this.date = date.toISO();
    } else {
      throw TypeValidateError("date", "dateTime");
    }

    if (isCoordinate(coordinate)) {
      this.coordinate = coordinate;
    }
  }
}
