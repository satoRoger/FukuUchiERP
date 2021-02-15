import Person from "../../../domain/resourceManager/src/entity/person/person";
import UsersProperty from "./usersRepositoryModel/usersProperty";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import Fullname from "../../../domain/resourceManager/src/valueObject/fullname";
import Name from "../../../domain/resourceManager/src/valueObject/name";
export default class DocToDomainUser {
  constructor(
    private document:
      | FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
  ) {}

  async toDomain(): Promise<Person> {
    const id = this.document.id;
    const familyName = this.document.get(UsersProperty["familyName"]);
    const givenName = this.document.get(UsersProperty["givenName"]);
    const mail = this.document.get(UsersProperty["mail"]);
    const address = this.document.get(UsersProperty["address"]);
    const birthdate = this.document.get(UsersProperty["birthdate"]);
    const dependent = this.document.get(UsersProperty["dependent"]);
    const emergencyPhoneNumber = this.document.get(
      UsersProperty["emergencyPhoneNumber"]
    );
    const facilityId = this.document.get(UsersProperty["facilityId"]);
    const hireDate = this.document.get(UsersProperty["hireDate"]);
    const leaveDate = this.document.get(UsersProperty["leaveDate"]);
    const phoneNumber = this.document.get(UsersProperty["phoneNumber"]);
    const professionType = this.document.get(UsersProperty["professionType"]);
    const rollType = this.document.get(UsersProperty["rollType"]);
    const socialInsuranceCode = this.document.get(
      UsersProperty["socialInsuranceCode"]
    );
    const socialInsuranceNumber = this.document.get(
      UsersProperty["socialInsuranceNumber"]
    );
    const staffCode = this.document.get(UsersProperty["staffCode"]);
    const workDay = this.document.get(UsersProperty["workDay"]);
    const workStyle = this.document.get(UsersProperty["workStyle"]);
    const workTime = this.document.get(UsersProperty["workTime"]);

    let facilityDoc;

    if (facilityId) {
      facilityDoc = await facilityId.get();
    }

    const dependents = dependent
      ? dependent.map((fullname: Fullname) => {
          return {
            falilyName: fullname.familyName,
            givenName: fullname.givenName,
          };
        })
      : [];
    return new PersonFactory().create(
      id,
      rollType,
      mail,
      new Fullname(new Name(familyName), new Name(givenName)),
      birthdate,
      phoneNumber,
      emergencyPhoneNumber,
      address,
      dependents,
      facilityDoc ? facilityDoc.id : undefined,
      staffCode,
      workStyle,
      workDay,
      professionType,
      workTime,
      socialInsuranceCode,
      socialInsuranceNumber,
      hireDate,
      leaveDate
    );
  }
}
