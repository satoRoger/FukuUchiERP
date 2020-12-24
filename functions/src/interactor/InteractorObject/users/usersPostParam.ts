import { DateTime } from "luxon";
export default class UsersPostParam {
  constructor(
    readonly rollId: string,
    readonly mail: string,
    readonly familyName?: string,
    readonly givenName?: string,
    readonly birthdate?: DateTime,
    readonly address?: string,
    readonly phoneNumber?: string,
    readonly emergencyPhoneNumber?: string,
    readonly dependent?: { familyName: string; givenName: string }[],
    readonly facilityId?: string,
    readonly staffCode?: string,
    readonly workStyleId?: string,
    readonly professionId?: string,
    readonly workTimeId?: string,
    readonly socialInsuranceCode?: string,
    readonly socialInsuranceNumber?: string,
    readonly hireDate?: DateTime,
    readonly leaveDate?: DateTime
  ) {}
}
