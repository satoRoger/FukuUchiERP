import Person from "../../../domain/resourceManager/src/entity/person/person";
import admin from "../adminInitialize";

export default function UpdateUserFirebaseAuth(
  person: Person,
  password?: string
) {
  return admin.auth().updateUser(person.id.value, {
    email: person.mail.value,
    password: password,
  });
}
