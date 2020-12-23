import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";

export default class UsersPostParam {
  constructor(
    readonly id: string,
    readonly rollId: string,
    readonly familyName?: string  ,
	readonly givenName?:string,
    readonly mail: string,
    readonly birthdate?: DateTime,
    readonly address?: string,
    readonly phoneNumber?: string,
    readonly emergencyPhoneNumber?: string ,
    readonly dependent?: {familyName:string,givenName:string}[] ,
    readonly facilityId?: string,
    readonly staffCode?: string ,
    readonly workStyleId?: string,
    readonly professionId?: Profession ,
    readonly workTime?: WorkTime ,
    readonly socialInsurance?: SocialInsurance ,
    readonly hireDate?: DateTime,
    readonly leaveDate?: DateTime
  ) {}
}
