import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import UsersPostParam from "../../../interactor/InteractorObject/users/usersPostParam";

export default class ValidateUsersPostParam {
  constructor(
    readonly rollId?: string,
    readonly mail?: string,
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
    readonly socialInsuranceId?: string,
    readonly hireDate?: DateTime,
    readonly leaveDate?: DateTime
  ) {}

  createWithValid(): UsersPostParam | undefined {
    if (this.rollId && this.mail) {
      return new UsersPostParam(
        this.rollId,
        this.mail,
        this.familyName,
        this.givenName,
        this.birthdate,
        this.address,
        this.phoneNumber,
        this.emergencyPhoneNumber,
        this.dependent,
        this.facilityId,
        this.staffCode,
        this.workStyleId,
        this.professionId,
        this.hireDate,
        this.leaveDate
      );
    } else {
      return undefined;
    }
  }
}
