import "reflect-metadata";
import { injectable } from "inversify";
import TimecardsObject from "./timecardsObject";

@injectable()
abstract class TimecardsResponseInterface {
  abstract setResult: (result: TimecardsObject[]) => void;
  abstract parse: () => Array<Object>;
}

export default TimecardsResponseInterface;
