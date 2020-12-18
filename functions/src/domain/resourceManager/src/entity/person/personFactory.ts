import { DateTime } from "luxon";
import Person from "./person";

export default class PersonFactory {
  create(): Person {
    return new Person();
  }
}
