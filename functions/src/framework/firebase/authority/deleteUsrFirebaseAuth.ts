import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import admin from "../adminInitialize";

export default function DeleteUserFirebaseAuth(personId: PersonId) {
  return admin.auth().deleteUser(personId.value);
}
