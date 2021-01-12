import { DateTime } from "luxon";
import Address from "../../valueObject/address";
import Birthdate from "../../valueObject/birthday";
import Mail from "../../valueObject/mail";
import PhoneNumber from "../../valueObject/phoneNumber";
import ProfessionType from "../../valueObject/professionType";
import RollType from "../../valueObject/rollType";
import SocialInsurance from "../../valueObject/socialInsurance";
import StaffCode from "../../valueObject/staffCode";
import WorkStyle from "../../valueObject/workStyle";
import WorkTime from "../../valueObject/worktime";
import Fullname from "../../valueObject/fullname";
import PersonId from "../../valueObject/personId";
import FacilityId from "../../valueObject/facilityId";

export default class Person {
  constructor(
    private _id: PersonId,
    private _rollType: RollType,
    private _mail: Mail,
    private _birthdate?: Birthdate,
    private _phoneNumber?: PhoneNumber,
    private _emergencyPhoneNumber?: PhoneNumber,
    private _address?: Address,
    private _fullname?: Fullname,
    private _dependent?: Fullname[],
    private _facilityId?: FacilityId,
    private _staffCode?: StaffCode,
    private _workStyle?: WorkStyle,
    private _professionType?: ProfessionType,
    private _workTime?: WorkTime | string,
    private _socialInsurance?: SocialInsurance,
    private _hireDate?: DateTime,
    private _leaveDate?: DateTime
  ) {}

  public get id(): PersonId {
    return this._id;
  }
  public set id(value: PersonId) {
    this._id = value;
  }
  public get rollType(): RollType {
    return this._rollType;
  }
  public set rollType(value: RollType) {
    this._rollType = value;
  }
  public get fullname(): Fullname | undefined {
    return this._fullname;
  }
  public set fullname(value: Fullname | undefined) {
    this._fullname = value;
  }
  public get birthdate(): Birthdate | undefined {
    return this._birthdate;
  }
  public set birthdate(value: Birthdate | undefined) {
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
  public get facilityId(): FacilityId | undefined {
    return this._facilityId;
  }
  public set facilityId(value: FacilityId | undefined) {
    this._facilityId = value;
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
  public get professionType(): ProfessionType | undefined {
    return this._professionType;
  }
  public set professionType(value: ProfessionType | undefined) {
    this._professionType = value;
  }
  public get workTime(): WorkTime | string | undefined {
    return this._workTime;
  }
  public set workTime(value: WorkTime | string | undefined) {
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
