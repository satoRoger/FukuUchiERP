import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import UsersPostParam from "../../../interactor/src/InteractorObject/users/usersPostParam";
import RollType from "../../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../domain/resourceManager/src/valueObject/worktime";

export default class ValidateUsersPostParam {
  constructor(
    readonly rollType?: RollType,
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
    readonly workStyle?: WorkStyle,
    readonly professionType?: ProfessionType,
    readonly workTime?: WorkTime | string,
    readonly socialInsuranceCode?: string,
    readonly socialInsuranceNumber?: string,
    readonly hireDate?: DateTime,
    readonly leaveDate?: DateTime
  ) {}

  createWithValid(): UsersPostParam | undefined {
    const name =
      this.familyName && this.givenName
        ? { familyName: this.familyName, givenName: this.givenName }
        : undefined;
    
    if (this.rollType && this.mail) {
      return new UsersPostParam(
        this.rollType,
        this.mail,
        name,
        this.birthdate,
        this.address,
        this.phoneNumber,
        this.emergencyPhoneNumber,
        this.dependent,
        this.facilityId,
        this.staffCode,
        this.workStyle,
        this.professionType,
        this.workTime,
        this.socialInsuranceCode,
        this.socialInsuranceNumber,
        this.hireDate,
        this.leaveDate
      );
    } else {
      return undefined;
    }
  }
}
