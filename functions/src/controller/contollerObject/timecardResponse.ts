import { injectable } from "inversify";
import { DateTime } from "luxon";
import TimecardsObject from "../../interactor/InteractorObject/timecards/timecardsObject";
import TimecardsResponseInterface from "../../interactor/InteractorObject/timecards/timecardsResponse";

@injectable()
class TimecardsResponse implements TimecardsResponseInterface {
  private result?: TimecardsObject[];

  setResult = (result: TimecardsObject[]) => {
    this.result = result;
  };
  parse = () => {
    if (this.result) {
      return this.result.map((timecard) => {
        return {
          userId: timecard.userId,
          date: timecard.date.toISO(),
          cardType: timecard.cardType,
        };
      });
    } else {
      return [];
    }
  };
}

export default TimecardsResponse;
