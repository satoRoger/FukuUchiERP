import { DateTime } from "luxon";
import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import {
  isDateTime,
  isISOString,
  isProfession,
  isRollType,
  isString,
  isWorkDay,
  isWorkStyle,
  isWorkTime,
} from "../../../../util/isType/isType";
import Fullname from "../../../../domain/resourceManager/src/valueObject/fullname";
import Name from "../../../../domain/resourceManager/src/valueObject/name";
import TypeValidateError from "../../../../controller/src/error/typeValidateError";
import WorkDate from "../../../../domain/resourceManager/src/valueObject/workdate";

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
  readonly workDay?: WorkDate[];
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
    options: {
      birthdate?: any;
      address?: any;
      phoneNumber?: any;
      emergencyPhoneNumber?: any;
      dependent?: any;
      facilityId?: any;
      staffCode?: any;
      workStyle?: any;
      workDay?: any;
      profession?: any;
      workTime?: any;
      socialInsuranceCode?: any;
      socialInsuranceNumber?: any;
      hireDate?: any;
      leaveDate?: any;
    } = {}
  ) {
    const {
      birthdate,
      address,
      phoneNumber,
      emergencyPhoneNumber,
      dependent,
      facilityId,
      staffCode,
      workStyle,
      workDay,
      profession,
      workTime,
      socialInsuranceCode,
      socialInsuranceNumber,
      hireDate,
      leaveDate,
    } = options;

    if (isRollType(rollType)) {
      this.rollType = rollType;
    } else {
      throw TypeValidateError("rollType", "RollType");
    }
    if (isString(mail)) {
      this.mail = mail;
    } else {
      throw TypeValidateError("mail", "string");
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
    if (isWorkDay(workDay)) {
      this.workDay = workDay;
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
