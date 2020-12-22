import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import admin from "../../../framework/firebase/adminInitialize";
import PhoneNumber from "../../../domain/resourceManager/src/valueObject/phoneNumber";
import Facility from "../../../domain/resourceManager/src/entity/facility/facility";
import WorkStyle from '../../../domain/resourceManager/src/valueObject/workStyle';

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }

  async save(person: Person): Promise<Person> {
    const replaceNull = (value: any) => {
      if (typeof value === "undefined") return null;
      else return value;
    };

    let facilityRef = null;
    if (person.facility) {
      facilityRef = this.database
        .collection("facilities")
        .doc(person.facility.id.value);
    }
    //personにfullnameを追加させる
    await this.repository.add({
      roll: person.roll.value,
      familyName: replaceNull(person.familyName?.value),
      givenName: replaceNull(person.givenName?.value),
      mail: person.mail.value,
      birthdate: replaceNull(person.birthday?.value.toJSDate()),
      address: replaceNull(person.address?.value),
      phoneNumber: replaceNull(person.phoneNumber?.value),
      emergencyPhoneNumber: replaceNull(person.emergencyPhoneNumber?.value),
      dependent: replaceNull(person.dependent?.value),
      facility: facilityRef,
      staffCode: replaceNull(person.staffCode?.value),
      workStyle:
    });
    return person;
  }
  search(): Promise<PersonCollection> {
    throw new Error("Method not implemented.");
  }
}
