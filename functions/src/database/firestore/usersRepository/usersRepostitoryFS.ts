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

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }
  async search(
    personId?: PersonId,
    facilityId?: FacilityId
  ): Promise<PersonCollection> {
    if (personId) {
      return this.repository
        .doc(personId.value)
        .get()
        .then(async (doc) => {
          const data = doc.data();
          if (!data) {
            return new PersonCollection([]);
          }
          const dependent = data.dependent
            ? data.dependent.map((fullname: Fullname) => {
                return {
                  falilyName: fullname.familyName,
                  givenName: fullname.givenName,
                };
              })
            : [];
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
          return new PersonCollection([]);
        });
    }

    let queryRepository:
      | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = this
      .repository;

    if (facilityId) {
      const facilityRef = this.database
        .collection("facilities")
        .doc(facilityId.value);
      queryRepository = queryRepository.where("facilityId", "==", facilityRef);
    }

    const snapshot = await queryRepository.get();
    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const facility = await data.facilityId.get();
      const dependent: Fullname[] = data.dependent
        ? data.dependent.map(
            (fullname: { familyName: string; givenName: string }) => {
              return new Fullname(
                new Name(fullname.familyName),
                new Name(fullname.givenName)
              );
            }
          )
        : [];
      return new PersonFactory().create(
        doc.id,
        data.rollType,
        data.mail,
        data.birthdate,
        data.phoneNumber,
        data.emergencyPhoneNumber,
        data.address,
        new Fullname(new Name(data.familyName), new Name(data.givenName)),
        dependent,
        facility.id,
        data.staffCode,
        data.workStyle,
        data.profession,
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
