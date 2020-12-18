import { Address } from "cluster";
import { DateTime } from "luxon";
import Birthday from "../../valueObject/birthday";
import Fullname from "../../valueObject/Fullname";
import Mail from "../../valueObject/mail";
import PhoneNumber from "../../valueObject/phoneNumber";
import Profession from "../../valueObject/profession";
import Roll from "../../valueObject/Roll";
import SocialInsurance from "../../valueObject/socialInsurance";
import StaffCode from "../../valueObject/staffCode";
import WorkStyle from "../../valueObject/workStyle";
import WorkTime from "../../valueObject/worktime";
import Facility from "../facility/facility";

export default class Person {
  constructor(
    private _roll: Roll,
    private _fullname: Fullname,
    private _birthday: Birthday,
    private _address: Address,
    private _phoneNumber: PhoneNumber,
    private _emergencyPhoneNumber: PhoneNumber,
    private _mail: Mail,
    private _dependent: Fullname,
    private _facility: Facility,
    private _staffCode: StaffCode,
    private _workStyle: WorkStyle,
    private _profession: Profession,
    private _workTime: WorkTime,
    private _socialInsurance: SocialInsurance,
    private _hireDate: DateTime,
    private _leaveDate: DateTime
  ) { }
  
  public get roll(): Roll {
    return this._roll;
  }
  public set roll(value: Roll) {
    this._roll = value;
  }
  public get fullname(): Fullname {
    return this._fullname;
  }
  public set fullname(value: Fullname) {
    this._fullname = value;
  }
  public get birthday(): Birthday {
    return this._birthday;
  }
  public set birthday(value: Birthday) {
    this._birthday = value;
  }
  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }
  public get phoneNumber(): PhoneNumber {
    return this._phoneNumber;
  }
  public set phoneNumber(value: PhoneNumber) {
    this._phoneNumber = value;
  }
  public get emergencyPhoneNumber(): PhoneNumber {
    return this._emergencyPhoneNumber;
  }
  public set emergencyPhoneNumber(value: PhoneNumber) {
    this._emergencyPhoneNumber = value;
  }
  public get mail(): Mail {
    return this._mail;
  }
  public set mail(value: Mail) {
    this._mail = value;
  }
  public get dependent(): Fullname {
    return this._dependent;
  }
  public set dependent(value: Fullname) {
    this._dependent = value;
  }
  public get facility(): Facility {
    return this._facility;
  }
  public set facility(value: Facility) {
    this._facility = value;
  }
  public get staffCode(): StaffCode {
    return this._staffCode;
  }
  public set staffCode(value: StaffCode) {
    this._staffCode = value;
  }
  public get workStyle(): WorkStyle {
    return this._workStyle;
  }
  public set workStyle(value: WorkStyle) {
    this._workStyle = value;
  }
  public get profession(): Profession {
    return this._profession;
  }
  public set profession(value: Profession) {
    this._profession = value;
  }
  public get workTime(): WorkTime {
    return this._workTime;
  }
  public set workTime(value: WorkTime) {
    this._workTime = value;
  }
  public get socialInsurance(): SocialInsurance {
    return this._socialInsurance;
  }
  public set socialInsurance(value: SocialInsurance) {
    this._socialInsurance = value;
  }
  public get hireDate(): DateTime {
    return this._hireDate;
  }
  public set hireDate(value: DateTime) {
    this._hireDate = value;
  }
  public get leaveDate(): DateTime {
    return this._leaveDate;
  }
  public set leaveDate(value: DateTime) {
    this._leaveDate = value;
  }
}
