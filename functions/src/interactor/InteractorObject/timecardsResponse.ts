import "reflect-metadata";
import { DateTime } from "luxon";
import { injectable } from "inversify";

export type Timecard = {
  userId: number;
  type: "workin" | "workout" | "breakin" | "breakout";
  date: DateTime;
  longitude?: number;
  latitude?: number;
};

@injectable()
abstract class TimecardsResponseInterface {
  abstract setResult: (result: Timecard[]) => void;
  abstract parse: () => Array<Object>;
}

export default TimecardsResponseInterface;
