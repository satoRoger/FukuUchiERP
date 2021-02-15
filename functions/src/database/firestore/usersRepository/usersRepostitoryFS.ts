import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import admin from "../../../framework/firebase/adminInitialize";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";
import CollectionName from "../common/collectionName";
import FireUsersSearch from "./usersSearch";
import DocToDomainUser from "./docToDomainUser";
import FireUsersModel from "./usersRepositoryModel/usersModel";

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

      const person = await new DocToDomainUser(document).toDomain();
      return new PersonCollection([person]);
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

  async add(person: Person): Promise<Person> {
    const userModel = new FireUsersModel(
      this.database,
      person.fullname?.familyName.value,
      person.fullname?.givenName.value,
      person.mail.value,
      person.rollType,
      {
        workStyle: person.workStyle,
        address: person.address?.value,
        birthdate: person.birthdate?.value,
        dependent: person.dependent?.map((name) => {
          return {
            familyName: name.familyName.value,
            givenName: name.givenName.value,
          };
        }),
        emergencyPhoneNumber: person.emergencyPhoneNumber?.value,
        facilityId: person.facilityId?.value,
        hireDate: person.hireDate,
        leaveDate: person.leaveDate,
        phoneNumber: person.phoneNumber?.value,
        professionType: person.professionType,
        socialInsuranceCode: person.socialInsurance?.code.value,
        socialInsuranceNumber: person.socialInsurance?.number.value,
        staffCode: person.staffCode?.value,
        workDay: person.workDay,
        workStartTime: person.workStartTime,
        workEndTime: person.workEndTime,
      }
    );

    const newUser = await this.repository.add(
      userModel.toFirebaseStoreFormat()
    );
    person.id = new PersonId(newUser.id);
    return person;
  }

  async save(person: Person): Promise<Person> {
    const userModel = new FireUsersModel(
      this.database,
      person.fullname?.familyName.value,
      person.fullname?.givenName.value,
      person.mail.value,
      person.rollType,
      {
        workStyle: person.workStyle,
        address: person.address?.value,
        birthdate: person.birthdate?.value,
        dependent: person.dependent?.map((name) => {
          return {
            familyName: name.familyName.value,
            givenName: name.givenName.value,
          };
        }),
        emergencyPhoneNumber: person.emergencyPhoneNumber?.value,
        facilityId: person.facilityId?.value,
        hireDate: person.hireDate,
        leaveDate: person.leaveDate,
        phoneNumber: person.phoneNumber?.value,
        professionType: person.professionType,
        socialInsuranceCode: person.socialInsurance?.code.value,
        socialInsuranceNumber: person.socialInsurance?.number.value,
        staffCode: person.staffCode?.value,
        workDay: person.workDay,
        workStartTime: person.workStartTime,
        workEndTime: person.workEndTime,
      }
    );

    await this.repository
      .doc(person.id.value)
      .set(userModel.toFirebaseStoreFormat());
    return person;
  }

  async remove(personId: PersonId): Promise<PersonId> {
    await this.repository.doc(personId.value).delete();
    return personId;
  }
}
