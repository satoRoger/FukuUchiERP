import { DateTime } from "luxon";
import Person from "./person";
import TimecardFactory from "./personFactory";

export default class PersonCollection implements Iterable<Person> {
  constructor(private collection: Person[] = new Array<Person>()) {}

  add: (person: Person) => this = (person) => {
    this.collection.push(person);
    return this;
  };

  size: () => number = () => {
    return this.collection.length;
  };

  [Symbol.iterator](): Iterator<Person> {
    return this.collection[Symbol.iterator]();
  }
}
