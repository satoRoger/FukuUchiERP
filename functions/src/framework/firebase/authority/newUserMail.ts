import Person from "../../../domain/resourceManager/src/entity/person/person";
import admin from "../adminInitialize";

export default function newUserMail(person: Person) {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for
    // this URL must be whitelisted in the Firebase Console.
    url: "https://www.example.com/checkout?cartId=1234",
    // This must be true for email link sign-in.
    handleCodeInApp: true,
  };
  return admin
    .auth()
    .generatePasswordResetLink(person.mail.value, actionCodeSettings);
}
