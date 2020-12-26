import { DateTime } from "luxon";
import PersonId from "../../valueObject/personId";
import Roll from "../../valueObject/roll";
import Person from "./person";
import RollId from "../../valueObject/rollId";
import Mail from "../../valueObject/mail";

export default class PersonFactory {
  create(): Person {
    return new Person(
      new PersonId("dfsa"),
      new Roll(new RollId("fda")),
      new Mail("fdas")
    );
  }
}
