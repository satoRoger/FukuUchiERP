import { DateTime } from "luxon";
import Person from "../entity/person/person";
import PersonCollection from "../entity/person/personCollection";

export default interface PersonRepository {
  save(person: Person): Promise<Person>;
  search(): Promise<PersonCollection>;
}
