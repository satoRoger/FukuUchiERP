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
import TypeValidateError from "../../../../controller/src/v1/error/typeValidateError";
import WorkDate from "../../../../domain/resourceManager/src/valueObject/workdate";

export default class UsersPutParam {
  readonly id: string;
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
  readonly workStartTime?:DateTime;
  readonly workEndTime?:DateTime;
  readonly workTime?: WorkTime | string;
  readonly socialInsuranceCode?: string;
  readonly socialInsuranceNumber?: string;
  readonly hireDate?: DateTime;
  readonly leaveDate?: DateTime;

  constructor(
    id: any,
    rollType: any,
    mail: any,
    familyname: any,
    givenname: any,
    option: {
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
      workStartTime?:any;
      workEndTime?:any;
      workTime?: any;
      socialInsuranceCode?: any;
      socialInsuranceNumber?: any;
      hireDate?: any;
      leaveDate?: any;
    }
  ) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw TypeValidateError("id", "string");
    }

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

    if (isISOString(option.birthdate)) {
      this.birthdate = DateTime.fromISO(option.birthdate);
    } else if (isDateTime(option.birthdate)) {
      this.birthdate = option.birthdate;
    }
    if (isString(option.phoneNumber)) {
      this.phoneNumber = option.phoneNumber;
    }
    if (isString(option.emergencyPhoneNumber)) {
      this.emergencyPhoneNumber = option.emergencyPhoneNumber;
    }
    if (isString(option.address)) {
      this.address = option.address;
    }
    if (isString(familyname) && isString(givenname)) {
      this.fullname = new Fullname(new Name(familyname), new Name(givenname));
    }
    if (Array.isArray(option.dependent)) {
      this.dependent = option.dependent;
    }
    if (isString(option.facilityId)) {
      this.facilityId = option.facilityId;
    }
    if (isString(option.staffCode)) {
      this.staffCode = option.staffCode;
    }
    if (isWorkStyle(option.workStyle)) {
      this.workStyle = option.workStyle;
    }
    if (isWorkDay(option.workDay)) {
      this.workDay = option.workDay;
    }
    if (isProfession(option.profession)) {
      this.profession = option.profession;
    }
      if (isISOString(option.workStartTime)) {
      this.workStartTime = DateTime.fromISO(option.workStartTime);
    } else if (isDateTime(option.workStartTime)) {
      this.workStartTime = option.workStartTime;
    }
      if (isISOString(option.workEndTime)) {
      this.workEndTime = DateTime.fromISO(option.workEndTime);
    } else if (isDateTime(option.workEndTime)) {
      this.workEndTime = option.workEndTime;
    }
    if (isWorkTime(option.workTime)) {
      this.workTime = option.workTime;
    }
    if (isString(option.socialInsuranceCode)) {
      this.socialInsuranceCode = option.socialInsuranceCode;
    }
    if (isString(option.socialInsuranceNumber)) {
      this.socialInsuranceNumber = option.socialInsuranceNumber;
    }
    if (isISOString(option.hireDate)) {
      this.hireDate = DateTime.fromISO(option.hireDate);
    } else if (isDateTime(option.hireDate)) {
      this.hireDate = option.hireDate;
    }
    if (isISOString(option.leaveDate)) {
      this.leaveDate = DateTime.fromISO(option.leaveDate);
    } else if (isDateTime(option.leaveDate)) {
      this.leaveDate = option.leaveDate;
    }
  }
}
