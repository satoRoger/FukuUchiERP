import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import TimecardsPostParam from "../../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import TimecardsQuery from "../../../interactor/src/InteractorObject/timecards/timecardsQuery";
export default class ValidateTimecardsQuery {
  constructor(private since?: DateTime, private until?: DateTime) {}

  createWithValid(): TimecardsQuery | undefined {
    return new TimecardsQuery(this.since, this.until);
  }
}
