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
      throw "";
    }

    if (isCardType(cardType)) {
      this.cardType = cardType;
    } else {
      throw "";
    }

    if (isString(userId)) {
      this.userId = userId;
    } else {
      throw "";
    }

    if (isISOString(date)) {
      this.date = date;
    } else if (isDateTime(date)) {
      this.date = date.toISO();
    } else {
      throw "";
    }

    if (isCoordinate(coordinate)) {
      this.coordinate = coordinate;
    }
  }
}
