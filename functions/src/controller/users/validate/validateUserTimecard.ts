import { DateTime } from "luxon";
import TimecardsQuery from "../../../interactor/src/InteractorObject/timecards/timecardsQuery";

export default class ValidateUserTimecard {
  constructor(
    private userId: string,
    private since?: DateTime,
    private until?: DateTime
  ) {}

  createWithValid(): TimecardsQuery | undefined {
    return new TimecardsQuery(this.since, this.until, this.userId);
  }
}
