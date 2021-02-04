import { DateTime } from "luxon";
import PersonId from "../../valueObject/personId";
import Person from "./person";
import Mail from "../../valueObject/mail";
import RollType from "../../valueObject/rollType";
import ProfessionType from "../../valueObject/professionType";
import WorkStyle from "../../valueObject/workStyle";
import WorkTime from "../../valueObject/worktime";
import Birthdate from "../../valueObject/birthday";
import PhoneNumber from "../../valueObject/phoneNumber";
import Address from "../../valueObject/address";
import Fullname from "../../valueObject/fullname";
import Name from "../../valueObject/name";
import Facility from "../facility/facility";
import FacilityId from "../../valueObject/facilityId";
import StaffCode from "../../valueObject/staffCode";
import SocialInsuranceId from "../../valueObject/socialInsuranceId";
import SocialInsurance from "../../valueObject/socialInsurance";
import InsuranceCode from "../../valueObject/insuranceCode";
import InsuranceNumber from "../../valueObject/insuranceNumber";
import WorkDate from "../../valueObject/workdate";

export default class PersonFactory {
  create(
    id: string,
    rollType: RollType,
    mail: string,
    birthdate?: DateTime,
    phoneNumber?: string,
    emergencyPhoneNumber?: string,
    address?: string,
    fullname?: Fullname,
    dependent?: Fullname[],
    facilityId?: string,
    staffCode?: string,
    workStyle?: WorkStyle,
    workDay?: WorkDate[],
    professionType?: ProfessionType,
    workStartTime?:DateTime,
    workEndTime?:DateTime,
    workTime?: WorkTime | string,
    socialInsuranceCode?: string,
    socialInsuranceNumber?: string,
    hireDate?: DateTime,
    leaveDate?: DateTime
  ): Person {
    const birth = birthdate ? new Birthdate(birthdate) : undefined;

    const phone = phoneNumber ? new PhoneNumber(phoneNumber) : undefined;

    const ephone = emergencyPhoneNumber
      ? new PhoneNumber(emergencyPhoneNumber)
      : undefined;

    const addr = address ? new Address(address) : undefined;

    const name = fullname;

    const depend = dependent;

    const facility = facilityId ? new FacilityId(facilityId) : undefined;

    const staff = staffCode ? new StaffCode(staffCode) : undefined;

    const social =
      socialInsuranceCode && socialInsuranceNumber
        ? new SocialInsurance(
            new InsuranceCode(socialInsuranceCode),
            new InsuranceNumber(socialInsuranceNumber)
          )
        : undefined;

    return new Person(
      new PersonId(id),
      rollType,
      new Mail(mail),
      birth,
      phone,
      ephone,
      addr,
      name,
      depend,
      facility,
      staff,
      workStyle,
      workDay,
      professionType,
      workTime,
      social,
      hireDate,
      leaveDate
    );
  }
}
