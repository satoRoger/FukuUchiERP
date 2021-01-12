import { DateTime } from "luxon";
import SocialInsurance from "../../../../domain/resourceManager/src/valueObject/socialInsurance";
import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import {
  isDateTime,
  isFullname,
  isISOString,
  isProfession,
  isRollType,
  isString,
  isWorkStyle,
  isWorkTime,
} from "../../../../util/isType/isType";
import Fullname from "../../../../domain/resourceManager/src/valueObject/fullname";
import Name from "../../../../domain/resourceManager/src/valueObject/name";
export default class UsersPostParam {
  readonly rollType: RollType;
  readonly mail: string;
  readonly fullname?: Fullname;
  readonly birthdate?: DateTime;
  readonly address?: string;
  readonly phoneNumber?: string;
  readonly emergencyPhoneNumber?: string;
  readonly dependent?: Fullname[];
  readonly facilityId?: string;
  readonly staffCode?: string;
  readonly workStyle?: WorkStyle;
  readonly profession?: ProfessionType;
  readonly workTime?: WorkTime | string;
  readonly socialInsuranceCode?: string;
  readonly socialInsuranceNumber?: string;
  readonly hireDate?: DateTime;
  readonly leaveDate?: DateTime;

  constructor(
    rollType: any,
    mail: any,
    familyname: any,
    givenname: any,
    birthdate?: any,
    address?: any,
    phoneNumber?: any,
    emergencyPhoneNumber?: any,
    dependent?: any,
    facilityId?: any,
    staffCode?: any,
    workStyle?: any,
    profession?: any,
    workTime?: any,
    socialInsuranceCode?: any,
    socialInsuranceNumber?: any,
    hireDate?: any,
    leaveDate?: any
  ) {
    if (isRollType(rollType)) {
      this.rollType = rollType;
    } else {
      throw "";
    }
    if (isString(mail)) {
      this.mail = mail;
    } else {
      throw "";
    }

    if (isISOString(birthdate)) {
      this.birthdate = DateTime.fromISO(birthdate);
    } else if (isDateTime(birthdate)) {
      this.birthdate = birthdate;
    }
    if (isString(phoneNumber)) {
      this.phoneNumber = phoneNumber;
    }
    if (isString(emergencyPhoneNumber)) {
      this.emergencyPhoneNumber = emergencyPhoneNumber;
    }
    if (isString(address)) {
      this.address = address;
    }
    if (isString(familyname) && isString(givenname)) {
      this.fullname = new Fullname(new Name(familyname), new Name(givenname));
    }
    if (Array.isArray(dependent)) {
      this.dependent = dependent;
    }
    if (isString(facilityId)) {
      this.facilityId = facilityId;
    }
    if (isString(staffCode)) {
      this.staffCode = staffCode;
    }
    if (isWorkStyle(workStyle)) {
      this.workStyle = workStyle;
    }
    if (isProfession(profession)) {
      this.profession = profession;
    }
    if (isWorkTime(workTime)) {
      this.workTime = workTime;
    }
    if (isString(socialInsuranceCode)) {
      this.socialInsuranceCode = socialInsuranceCode;
    }
    if (isString(socialInsuranceNumber)) {
      this.socialInsuranceNumber = socialInsuranceNumber;
    }
    if (isISOString(hireDate)) {
      this.hireDate = DateTime.fromISO(hireDate);
    } else if (isDateTime(hireDate)) {
      this.hireDate = hireDate;
    }
    if (isISOString(leaveDate)) {
      this.leaveDate = DateTime.fromISO(leaveDate);
    } else if (isDateTime(leaveDate)) {
      this.leaveDate = leaveDate;
    }
  }
}
