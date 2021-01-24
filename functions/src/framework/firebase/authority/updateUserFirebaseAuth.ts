import Person from "../../../domain/resourceManager/src/entity/person/person";
import admin from "../adminInitialize";

export default function UpdateUserFirebaseAuth(
  person: Person,
  password?: string
) {
  let updateData: admin.auth.UpdateRequest = {
    email: person.mail.value,
  };
  if (password) {
    updateData = { ...updateData, password: password };
  }
  return admin.auth().updateUser(person.id.value, updateData);
}
