import FireTimestamp from "../../common/firestoreType/fireTimestamp";
import FireString from "../../common/firestoreType/fireString";
import FireUserRefference from "../../common/firestoreType/fireUserRefference";
import { DateTime } from "luxon";
import FireNull from "../../common/firestoreType/fireNull";
import FireNumber from "../../common/firestoreType/fireNumber";
import TimecardsProperty from "./usersProperty";
import FireArray from "../../common/firestoreType/fireArray";
import FireFacilityRefference from "../../common/firestoreType/fireFacilityRefference";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import WorkDate from "../../../../domain/resourceManager/src/valueObject/workdate";
import UsersProperty from "./usersProperty";

export default class FireUsersModel {
  private familyName: FireString;
  private givenName: FireString;
  private mail: FireString;
  private rollType: FireString;
  private address: FireString | FireNull;
  private birthdate: FireTimestamp | FireNull;
  private dependent: FireArray | FireNull;
  private emergencyPhoneNumber: FireString | FireNull;
  private facilityId: FireFacilityRefference | FireNull;
  private hireDate: FireTimestamp | FireNull;
  private leaveDate: FireTimestamp | FireNull;
  private phoneNumber: FireString | FireNull;
  private professionType: FireString | FireNull;
  private socialInsuranceCode: FireString | FireNull;
  private socialInsuranceNumber: FireString | FireNull;
  private staffCode: FireString | FireNull;
  private workDay: FireArray | FireNull;
  private workStyle: FireString | FireNull;
  private workStartTime: FireTimestamp | FireNull;
  private workEndTime: FireTimestamp | FireNull;
  private workTime: FireString | FireNull;

  constructor(
    connectionDB: FirebaseFirestore.Firestore,
    familyName: string,
    givenName: string,
    mail: string,
    rollType: RollType,
    option: {
      address?: string;
      birthdate?: DateTime;
      dependent?: { familyName: string; givenName: string }[];
      emergencyPhoneNumber?: string;
      facilityId?: string;
      hireDate?: DateTime;
      leaveDate?: DateTime;
      phoneNumber?: string;
      professionType?: string;
      socialInsuranceCode?: string;
      socialInsuranceNumber?: string;
      staffCode?: string;
      workDay?: WorkDate[];
      workStyle?: WorkStyle;
      workStartTime?: DateTime;
      workEndTime?: DateTime;
      workTime?: WorkTime;
    }
  ) {
    this.familyName = new FireString(connectionDB, familyName);
    this.givenName = new FireString(connectionDB, givenName);
    this.mail = new FireString(connectionDB, mail);
    this.rollType = new FireString(connectionDB, rollType);
    this.address = option.address
      ? new FireString(connectionDB, option.address)
      : new FireNull();
    this.birthdate = option.birthdate
      ? new FireTimestamp(connectionDB, option.birthdate)
      : new FireNull();
    this.dependent = option.dependent
      ? new FireArray(connectionDB, option.dependent)
      : new FireNull();
    this.emergencyPhoneNumber = option.emergencyPhoneNumber
      ? new FireString(connectionDB, option.emergencyPhoneNumber)
      : new FireNull();
    this.facilityId = option.facilityId
      ? new FireFacilityRefference(connectionDB, option.facilityId)
      : new FireNull();
    this.hireDate = option.hireDate
      ? new FireTimestamp(connectionDB, option.hireDate)
      : new FireNull();
    this.leaveDate = option.leaveDate
      ? new FireTimestamp(connectionDB, option.leaveDate)
      : new FireNull();
    this.phoneNumber = option.phoneNumber
      ? new FireString(connectionDB, option.phoneNumber)
      : new FireNull();
    this.professionType = option.professionType
      ? new FireString(connectionDB, option.professionType)
      : new FireNull();
    this.socialInsuranceCode = option.socialInsuranceCode
      ? new FireString(connectionDB, option.socialInsuranceCode)
      : new FireNull();
    this.socialInsuranceNumber = option.socialInsuranceNumber
      ? new FireString(connectionDB, option.socialInsuranceNumber)
      : new FireNull();
    this.staffCode = option.staffCode
      ? new FireString(connectionDB, option.staffCode)
      : new FireNull();
    this.workDay = option.workDay
      ? new FireArray(connectionDB, option.workDay)
      : new FireNull();
    this.workStyle = option.workStyle
      ? new FireString(connectionDB, option.workStyle)
      : new FireNull();
    this.workTime = option.workTime
      ? new FireString(connectionDB, option.workTime)
      : new FireNull();
    this.workStartTime = option.workStartTime
      ? new FireTimestamp(connectionDB, option.workStartTime)
      : new FireNull();
    this.workEndTime = option.workEndTime
      ? new FireTimestamp(connectionDB, option.workEndTime)
      : new FireNull();
  }
  toFirebaseStoreFormat(): FirebaseFirestore.DocumentData {
    return {
      [UsersProperty.address]: this.address.toFireStore(),
      [UsersProperty.birthdate]: this.birthdate.toFireStore(),
      [UsersProperty.dependent]: this.dependent.toFireStore(),
      [UsersProperty.emergencyPhoneNumber]: this.emergencyPhoneNumber.toFireStore(),
      [UsersProperty.facilityId]: this.facilityId.toFireStore(),
      [UsersProperty.familyName]: this.familyName.toFireStore(),
      [UsersProperty.givenName]: this.givenName.toFireStore(),
      [UsersProperty.hireDate]: this.hireDate.toFireStore(),
      [UsersProperty.leaveDate]: this.leaveDate.toFireStore(),
      [UsersProperty.mail]: this.mail.toFireStore(),
      [UsersProperty.phoneNumber]: this.phoneNumber.toFireStore(),
      [UsersProperty.professionType]: this.professionType.toFireStore(),
      [UsersProperty.rollType]: this.rollType.toFireStore(),
      [UsersProperty.socialInsuranceCode]: this.socialInsuranceCode.toFireStore(),
      [UsersProperty.socialInsuranceNumber]: this.socialInsuranceNumber.toFireStore(),
      [UsersProperty.staffCode]: this.staffCode.toFireStore(),
      [UsersProperty.workDay]: this.workDay.toFireStore(),
      [UsersProperty.workStyle]: this.workStyle.toFireStore(),
      [UsersProperty.workStartTime]: this.workStartTime.toFireStore(),
      [UsersProperty.workEndTime]: this.workEndTime.toFireStore(),
      [UsersProperty.workTime]: this.workTime.toFireStore(),
    };
  }
}
