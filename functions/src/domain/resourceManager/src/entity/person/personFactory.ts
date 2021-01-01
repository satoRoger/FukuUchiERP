import { DateTime } from "luxon";
import PersonId from "../../valueObject/personId";
import Person from "./person";
import Mail from "../../valueObject/mail";
import RollType from "../../valueObject/rollType";
import FullnameAPIInterface from "../../../../../interactor/src/APIInterface/user/fullname";
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

export default class PersonFactory {
  create(
    id: string,
    rollType: RollType,
    mail: string,
    birthdate?: DateTime,
    phoneNumber?: string,
    emergencyPhoneNumber?: string,
    address?: string,
    fullname?: FullnameAPIInterface,
    dependent?: FullnameAPIInterface[],
    facilityId?: string,
    staffCode?: string,
    workStyle?: WorkStyle,
    professionType?: ProfessionType,
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

    const name = fullname
      ? new Fullname(
          new Name(fullname.familyName),
          new Name(fullname.givenName)
        )
      : undefined;

    const depend = dependent
      ? dependent.map((d) => {
          return new Fullname(new Name(d.familyName), new Name(d.givenName));
        })
      : undefined;

    const facility = facilityId
      ? new Facility(new FacilityId(facilityId))
      : undefined;

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
      professionType,
      workTime,
      social,
      hireDate,
      leaveDate
    );
  }
}
