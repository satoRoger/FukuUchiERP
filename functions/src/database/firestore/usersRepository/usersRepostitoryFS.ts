import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import admin from "../../../framework/firebase/adminInitialize";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import Fullname from "../../../domain/resourceManager/src/valueObject/fullname";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";
import Name from "../../../domain/resourceManager/src/valueObject/name";
import CollectionName from "../common/collectionName";
import FireUsersSearch from "./usersSearch";
import DocToDomainUser from "./docToDomainUser";

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection(CollectionName.users);
  }
  async search(
    personId?: PersonId,
    facilityId?: FacilityId
  ): Promise<PersonCollection> {
    if (personId) {
      const document = await this.repository.doc(personId.value).get();
      if (!document.data) {
        return new PersonCollection([]);
      }
	  
      return new PersonCollection([new DocToDomainUser(document).toDomain()]);
    }

    const queryRepository = new FireUsersSearch(this.database, {
      facilityId: facilityId?.value,
    }).searchRepository();

    const documents = (await queryRepository.get()).docs;

    const users = documents.map(async (document) =>
      new DocToDomainUser(document).toDomain()
    );

    return Promise.all(users).then((users) => {
      const collection = new PersonCollection();
      for (let user of users) {
        collection.add(user);
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
        .collection(CollectionName.facilities)
        .doc(person.facilityId.value);
    }

    //更新
    if (person.id.value != "") {
      console.log("更新");
      console.log({ person });
      await this.repository.doc(person.id.value).set({
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
        workDay: replaceNull(person.workDay),
        profession: replaceNull(person.professionType),
        socialInsuranceCode: replaceNull(person.socialInsurance?.code.value),
        socialInsuranceNumber: replaceNull(
          person.socialInsurance?.number.value
        ),
        workTime: replaceNull(person.workTime),
        hireDate: replaceNull(person.hireDate?.toJSDate()),
        leaveDate: replaceNull(person.leaveDate?.toJSDate()),
      });
    }
    //新規
    else {
      console.log("新規");
      console.log({ person });
      const doc = await this.repository.add({
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
        workDay: replaceNull(person.workDay),
        profession: replaceNull(person.professionType),
        socialInsuranceCode: replaceNull(person.socialInsurance?.code.value),
        socialInsuranceNumber: replaceNull(
          person.socialInsurance?.number.value
        ),
        workTime: replaceNull(person.workTime),
        hireDate: replaceNull(person.hireDate?.toJSDate()),
        leaveDate: replaceNull(person.leaveDate?.toJSDate()),
      });
      person.id = new PersonId(doc.id);
      console.log({ person });
    }

    return person;
  }
  async remove(personId: PersonId): Promise<PersonId> {
    await this.repository.doc(personId.value).delete();
    return personId;
  }
}
