import { DateTime } from "luxon";
export default class Birthdate {
  constructor(private birthdate: DateTime) {}

  public get value() {
    return this.birthdate;
  }
}
