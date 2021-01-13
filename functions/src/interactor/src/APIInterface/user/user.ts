import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import { DateTime } from "luxon";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import Fullname from "../../../../domain/resourceManager/src/valueObject/fullname";
import Person from "../../../../domain/resourceManager/src/entity/person/person";
import TypeValidateError from "../../../../controller/error/typeValidateError";
import {
  isWorkStyle,
  isProfession,
  isWorkTime,
} from "../../../../util/isType/isType";
import {
  isString,
  isRollType,
  isISOString,
  isDateTime,
  isFullname,
} from "../../../../util/isType/isType";

export default class UserAPIInterface {
  readonly id: string;
  readonly rollType: RollType;
  readonly mail: string;
  readonly birthdate?: string;
  readonly phoneNumber?: string;
  readonly emergencyPhoneNumber?: string;
  readonly address?: string;
  readonly fullname?: Fullname;
  readonly dependent?: Fullname[];
  readonly facilityId?: string;
  readonly staffCode?: string;
  readonly workStyle?: WorkStyle;
  readonly profession?: ProfessionType;
  readonly workTime?: WorkTime | string;
  readonly socialInsuranceCode?: string;
  readonly socialInsuranceNumber?: string;
  readonly hireDate?: string;
  readonly leaveDate?: string;

  static fromDomainUser(user: Person) {
    return new UserAPIInterface(
      user.id.value,
      user.rollType,
      user.mail.value,
      user.birthdate?.value,
      user.phoneNumber?.value,
      user.emergencyPhoneNumber?.value,
      user.address?.value,
      user.fullname,
      user.dependent,
      user.facilityId?.value,
      user.staffCode?.value,
      user.workStyle,
      user.professionType,
      user.workTime,
      user.socialInsurance?.code.value,
      user.socialInsurance?.number.value,
      user.hireDate,
      user.leaveDate
    );
  }

  constructor(
    id: any,
    rollType: any,
    mail: any,
    birthdate?: any,
    phoneNumber?: any,
    emergencyPhoneNumber?: any,
    address?: any,
    fullname?: any,
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
    if (isString(id)) {
      this.id = id;
    } else {
      console.log(TypeValidateError("id", "string"));
      throw "";
    }
    if (isRollType(rollType)) {
      this.rollType = rollType;
    } else {
      console.log(TypeValidateError("rolltype", "rolltype"));
      throw "";
    }
    if (isString(mail)) {
      this.mail = mail;
    } else {
      console.log(typeof mail);
      console.log(mail);
      console.log(TypeValidateError("mail", "string"));
      throw "";
    }
    if (isISOString(birthdate)) {
      this.birthdate = birthdate;
    } else if (isDateTime(birthdate)) {
      this.birthdate = birthdate.toISO();
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
    if (isFullname(fullname)) {
      this.fullname = fullname;
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
      this.hireDate = hireDate;
    } else if (isDateTime(hireDate)) {
      this.hireDate = hireDate.toISO();
    }
    if (isISOString(leaveDate)) {
      this.leaveDate = leaveDate;
    } else if (isDateTime(leaveDate)) {
      this.leaveDate = leaveDate.toISO();
    }
  }
}
