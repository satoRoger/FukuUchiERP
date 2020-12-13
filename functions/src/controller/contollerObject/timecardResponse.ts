import { injectable } from "inversify";
import { DateTime } from "luxon";
import TimecardsResponseInterface, {
  Timecard,
} from "../../interactor/InteractorObject/timecardsResponse";

@injectable()
class TimecardsResponse implements TimecardsResponseInterface {
  private result?: Timecard[];

  setResult = (result: Timecard[]) => {
    this.result = result;
  };
  parse = () => {
    if (this.result) {
      return this.result;
    } else {
      return [];
    }
  };
}

export default TimecardsResponse;
