import { DateTime } from "luxon";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";
import EventsProperty from "./usersRepositoryModel/usersProperty";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/timecard";
import TimecardFactory from "../../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import TimecardsProperty from "./usersRepositoryModel/usersProperty";
import TimecardId from "../../../domain/attendanceManagement/src/valueObject/timecardId";
import EmployeeId from "../../../domain/attendanceManagement/src/valueObject/employeeId";
import Person from '../../../domain/resourceManager/src/entity/person/person';
import UsersProperty from './usersRepositoryModel/usersProperty';
import PersonFactory from '../../../domain/resourceManager/src/entity/person/personFactory';
import RollType from "../../../domain/resourceManager/src/valueObject/rollType";
import Fullname from '../../../domain/resourceManager/src/valueObject/fullname';
export default class DocToDomainUser {
  constructor(
    private document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
  ) {}

  async toDomain(): Promise<Person> {
    const id = this.document.id;
    const familyName = this.document.get( UsersProperty["familyName"]),
    const givenName = this.document.get( UsersProperty["givenName"]),
    const mail = this.document.get( UsersProperty["mail"]),
    const address = this.document.get( UsersProperty["address"]),
    const birthdate = this.document.get( UsersProperty["birthdate"]),
    const dependent= this.document.get( UsersProperty["dependent"]),
    const emergencyPhoneNumber = this.document.get( UsersProperty["emergencyPhoneNumber"]),
    const facilityId = this.document.get( UsersProperty["facilityId"]),
    const hireDate = this.document.get( UsersProperty["hireDate"]),
    const leaveDate = this.document.get( UsersProperty["leaveDate"]),
    const phoneNumber = this.document.get( UsersProperty["phoneNumber"]),
    const professionType = this.document.get( UsersProperty["professionType"]),
    const rollType = this.document.get( UsersProperty["rollType"]),
    const socialInsuranceCode = this.document.get( UsersProperty["socialInsuranceCode"]),
    const socialInsuranceNumber = this.document.get( UsersProperty["socialInsuranceNumber"]),
    const staffCode = this.document.get( UsersProperty["staffCode"]),
    const workDay = this.document.get( UsersProperty["workDay"]),
    const workStyle = this.document.get( UsersProperty["workStyle"]),
    const workTime = this.document.get( UsersProperty["workTime"]),

    let facilityDoc:any;
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
  birthdate,
  phoneNumber,
  emergencyPhoneNumber,
  address,
  new Fullname(familyName, givenName),
  dependents,
  facilityDoc ? facilityDoc.id : undefined,
  staffCode,
  workStyle,
  workDay,
  professionType,
  workTime,
  socialInsuranceCode,
  socialInsuranceNumber
),
  }
}
