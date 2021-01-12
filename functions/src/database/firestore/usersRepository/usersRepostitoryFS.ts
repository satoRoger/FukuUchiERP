import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import admin from "../../../framework/firebase/adminInitialize";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import Fullname from "../../../domain/resourceManager/src/valueObject/fullname";

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }
  async search(personId?: PersonId): Promise<PersonCollection> {
    if (personId) {
      return this.repository
        .doc(personId.value)
        .get()
        .then(async (doc) => {
          const data = doc.data();
          if (!data) {
            return new PersonCollection([]);
          }
          const dependent = data.dependent.map((fullname: Fullname) => {
            return {
              falilyName: fullname.familyName,
              givenName: fullname.givenName,
            };
          });
          const facility = await data.facilityId.get();
          return new PersonCollection([
            new PersonFactory().create(
              personId.value,
              data.rollType,
              data.mail,
              data.birthdate,
              data.phoneNumber,
              data.emergencyPhoneNumber,
              data.address,
              new Fullname(data.familyName, data.givenName),
              dependent,
              facility.id,
              data.staffCode,
              data.workStyle,
              data.professionType,
              data.workTime,
              data.socialInsuranceCode,
              data.socialInsuranceNumber
            ),
          ]);
        })
        .catch((err) => {
          console.log(err);
          return new PersonCollection([]);
        });
    }
    const snapshot = await this.repository.get();
    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const facility = await data.facilityId.get();
      const dependent = data.dependent.map((fullname: Fullname) => {
        return {
          falilyName: fullname.familyName,
          givenName: fullname.givenName,
        };
      });
      return new PersonFactory().create(
        doc.id,
        data.rollType,
        data.mail,
        data.birthdate,
        data.phoneNumber,
        data.emergencyPhoneNumber,
        data.address,
        new Fullname(data.familyName, data.givenName),
        dependent,
        facility.id,
        data.staffCode,
        data.workStyle,
        data.professionType,
        data.workTime,
        data.socialInsuranceCode,
        data.socialInsuranceNumber
      );
    });
    return Promise.all(result).then((people) => {
      const collection = new PersonCollection();
      for (let person of people) {
        collection.add(person);
      }
      return collection;
    });
  }

  async save(person: Person): Promise<Person> {
    const replaceNull = (value: any) => {
      if (typeof value === "undefined") return null;
      else return value;
    };

    let facilityRef = null;
    if (person.facilityId) {
      facilityRef = this.database
        .collection("facilities")
        .doc(person.facilityId.value);
    }

    //personにfullnameを追加させる
    await this.repository.add({
      rollType: person.rollType,
      familyName: replaceNull(person.fullname?.familyName.value),
      givenName: replaceNull(person.fullname?.givenName.value),
      mail: person.mail.value,
      birthdate: replaceNull(person.birthdate?.value.toJSDate()),
      address: replaceNull(person.address?.value),
      phoneNumber: replaceNull(person.phoneNumber?.value),
      emergencyPhoneNumber: replaceNull(person.emergencyPhoneNumber?.value),
      dependent: replaceNull(person.dependent),
      facilityId: facilityRef,
      staffCode: replaceNull(person.staffCode?.value),
      workStyle: replaceNull(person.workStyle),
      socialInsuranceCode: replaceNull(person.socialInsurance?.code),
      socialInsuranceNumber: replaceNull(person.socialInsurance?.number),
      hireDate: replaceNull(person.hireDate?.toJSDate()),
      leaveDate: replaceNull(person.leaveDate?.toJSDate()),
    });
    return person;
  }
}
