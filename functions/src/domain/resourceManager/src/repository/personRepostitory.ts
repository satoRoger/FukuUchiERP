import { DateTime } from "luxon";
import Person from "../entity/person/person";
import PersonCollection from "../entity/person/personCollection";
import PersonId from "../valueObject/personId";

export default interface PersonRepository {
  save(person: Person): Promise<Person>;
  search(personId?: PersonId): Promise<PersonCollection>;
}
