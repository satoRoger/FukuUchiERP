import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import admin from "../../../framework/firebase/adminInitialize";
import PhoneNumber from "../../../domain/resourceManager/src/valueObject/phoneNumber";
import Facility from "../../../domain/resourceManager/src/entity/facility/facility";
import WorkStyle from "../../../domain/resourceManager/src/valueObject/workStyle";

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }
  search(): Promise<PersonCollection> {
    throw new Error("Method not implemented.");
  }

  async save(person: Person): Promise<Person> {
    const replaceNull = (value: any) => {
      if (typeof value === "undefined") return null;
      else return value;
    };

    let rollRef = null;

    rollRef = this.database.collection("rolls").doc(person.roll.id.value);

    let facilityRef = null;
    if (person.facility) {
      facilityRef = this.database
        .collection("facilities")
        .doc(person.facility.id.value);
    }
    let workStyleRef = null;
    if (person.workStyle) {
      workStyleRef = this.database
        .collection("workStyles")
        .doc(person.workStyle.id.value);
    }

    let socialInsuranceRef = null;
    if (person.socialInsurance) {
      socialInsuranceRef = this.database
        .collection("socialInsurances")
        .doc(person.socialInsurance.id.value);
    }

    //personにfullnameを追加させる
    await this.repository.add({
      rollId: person.roll.id.value,
      familyName: replaceNull(person.fullname?.familyName.value),
      givenName: replaceNull(person.fullname?.givenName.value),
      mail: person.mail.value,
      birthdate: replaceNull(person.birthday?.value.toJSDate()),
      address: replaceNull(person.address?.value),
      phoneNumber: replaceNull(person.phoneNumber?.value),
      emergencyPhoneNumber: replaceNull(person.emergencyPhoneNumber?.value),
      dependent: replaceNull(person.dependent),
      facility: facilityRef,
      staffCode: replaceNull(person.staffCode?.value),
      workStyle: workStyleRef,
      socialInsuranceId: socialInsuranceRef,
      hireDate: replaceNull(person.hireDate?.toJSDate()),
      leaveDate: replaceNull(person.leaveDate?.toJSDate()),
    });
    return person;
  }
}
