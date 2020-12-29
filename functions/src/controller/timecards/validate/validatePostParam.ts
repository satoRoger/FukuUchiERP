import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import TimecardsPostParam from "../../../interactor/src/InteractorObject/timecards/timecardsPostParam";
export default class ValidateTimecardsPostParam {
  constructor(
    private userId?: string,
    private cardType?: CardType,
    private punchDate?: DateTime,
    private longitude?: number,
    private latitude?: number
  ) {}

  createWithValid(): TimecardsPostParam | undefined {
    if (this.userId && this.cardType && this.punchDate) {
      return new TimecardsPostParam(
        this.userId,
        this.cardType,
        this.punchDate,
        this.latitude,
        this.longitude
      );
    } else {
      return undefined;
    }
  }
}
