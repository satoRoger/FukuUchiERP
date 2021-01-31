const sendgrid = require("@sendgrid/mail");
import Person from "../../../domain/resourceManager/src/entity/person/person";
import admin from "../adminInitialize";
import sendgridAPIKey from "../../sendgrid/sendgridAPI";

export default async function SendValifyMail(person: Person) {
  sendgrid.setApiKey(sendgridAPIKey);
  return admin
    .auth()
    .generatePasswordResetLink(person.mail.value)
    .then(async (link) => {
      const msg = {
        to: person.mail.value,
        from: "satounbd@gmail.com",
        subject: "パスワードを設定してください",
        text: `${person.fullname?.familyName.value} ${person.fullname?.givenName.value}様
      こちらのリンクからパスワードを設定してください
      ${link}`,
      };
      await sendgrid.send(msg);
    });
}
