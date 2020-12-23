import { DateTime } from "luxon";
import Address from "../../valueObject/address";
import Birthdate from "../../valueObject/birthday";
import Name from "../../valueObject/name";
import Mail from "../../valueObject/mail";
import PhoneNumber from "../../valueObject/phoneNumber";
import Profession from "../../valueObject/profession";
import Roll from "../../valueObject/roll";
import SocialInsurance from "../../valueObject/socialInsurance";
import StaffCode from "../../valueObject/staffCode";
import WorkStyle from "../../valueObject/workStyle";
import WorkTime from "../../valueObject/worktime";
import Facility from "../facility/facility";
import Fullname from "../../valueObject/fullname";
import PersonId from "../../valueObject/personId";

export default class Person {
  constructor(
    private _id: PersonId,
    private _roll: Roll,
    private _fullname: Fullname  ,
    private _mail: Mail,
    private _birthdate?: Birthdate,
    private _address?: Address,
    private _phoneNumber?: PhoneNumber ,
    private _emergencyPhoneNumber?: PhoneNumber ,
    private _dependent?: Fullname[] ,
    private _facility?: Facility ,
    private _staffCode?: StaffCode ,
    private _workStyle?: WorkStyle ,
    private _profession?: Profession ,
    private _workTime?: WorkTime ,
    private _socialInsurance?: SocialInsurance ,
    private _hireDate?: DateTime,
    private _leaveDate?: DateTime
  ) { }

  public get id(): PersonId {
    return this._id;
  }
  public set id(value: PersonId) {
    this._id = value;
  }
  public get roll(): Roll {
    return this._roll;
  }
  public set roll(value: Roll) {
    this._roll = value;
  }
  public get fullname(): Fullname | undefined {
    return this._fullname;
  }
  public set fullname(value: Fullname | undefined) {
    this._fullname = value;
  }
  public get birthday(): Birthdate | undefined {
    return this._birthdate;
  }
  public set birthday(value: Birthdate | undefined) {
    this._birthdate = value;
  }
  public get address(): Address | undefined {
    return this._address;
  }
  public set address(value: Address | undefined) {
    this._address = value;
  }
  public get phoneNumber(): PhoneNumber | undefined {
    return this._phoneNumber;
  }
  public set phoneNumber(value: PhoneNumber | undefined) {
    this._phoneNumber = value;
  }
  public get emergencyPhoneNumber(): PhoneNumber | undefined {
    return this._emergencyPhoneNumber;
  }
  public set emergencyPhoneNumber(value: PhoneNumber | undefined) {
    this._emergencyPhoneNumber = value;
  }
  public get mail(): Mail {
    return this._mail;
  }
  public set mail(value: Mail) {
    this._mail = value;
  }
  public get dependent(): Fullname[] | undefined {
    return this._dependent;
  }
  public set dependent(value: Fullname[] | undefined) {
    this._dependent = value;
  }
  public get facility(): Facility | undefined {
    return this._facility;
  }
  public set facility(value: Facility | undefined) {
    this._facility = value;
  }
  public get staffCode(): StaffCode | undefined {
    return this._staffCode;
  }
  public set staffCode(value: StaffCode | undefined) {
    this._staffCode = value;
  }
  public get workStyle(): WorkStyle | undefined {
    return this._workStyle;
  }
  public set workStyle(value: WorkStyle | undefined) {
    this._workStyle = value;
  }
  public get profession(): Profession | undefined {
    return this._profession;
  }
  public set profession(value: Profession | undefined) {
    this._profession = value;
  }
  public get workTime(): WorkTime | undefined {
    return this._workTime;
  }
  public set workTime(value: WorkTime | undefined) {
    this._workTime = value;
  }
  public get socialInsurance(): SocialInsurance | undefined {
    return this._socialInsurance;
  }
  public set socialInsurance(value: SocialInsurance | undefined) {
    this._socialInsurance = value;
  }
  public get hireDate(): DateTime | undefined {
    return this._hireDate;
  }
  public set hireDate(value: DateTime | undefined) {
    this._hireDate = value;
  }
  public get leaveDate(): DateTime | undefined {
    return this._leaveDate;
  }
  public set leaveDate(value: DateTime | undefined) {
    this._leaveDate = value;
  }
}
