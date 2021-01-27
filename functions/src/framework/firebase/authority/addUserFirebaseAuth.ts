import Person from "../../../domain/resourceManager/src/entity/person/person";
import admin from "../adminInitialize";

export default function AddUserFirebaseAuth(person: Person, password?: string) {
  if (password) {
    return admin.auth().createUser({
      uid: person.id.value,
      email: person.mail.value,
      password: password,
    });
  } else {
    return admin.auth().createUser({
      uid: person.id.value,
      email: person.mail.value,
    });
  }
}
