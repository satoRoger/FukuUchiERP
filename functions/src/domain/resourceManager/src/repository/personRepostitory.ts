import { DateTime } from "luxon";
import Person from "../entity/person/person";
import PersonCollection from "../entity/person/personCollection";
import FacilityId from "../valueObject/facilityId";
import PersonId from "../valueObject/personId";

export default interface PersonRepository {
  add(person: Person): Promise<Person>;
  save(person: Person): Promise<Person>;
  search(
    personId?: PersonId,
    facilityId?: FacilityId
  ): Promise<PersonCollection>;
  remove(personId: PersonId): Promise<PersonId>;
}
