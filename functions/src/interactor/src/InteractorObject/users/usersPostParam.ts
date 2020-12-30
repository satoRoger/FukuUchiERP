import { DateTime } from "luxon";
import SocialInsurance from "../../../../domain/resourceManager/src/valueObject/socialInsurance";
import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import FullnameAPIInterface from "../../APIInterface/user/fullname";
export default class UsersPostParam {
  constructor(
    readonly rollType: RollType,
    readonly mail: string,
    readonly fullname?: FullnameAPIInterface,
    readonly birthdate?: DateTime,
    readonly address?: string,
    readonly phoneNumber?: string,
    readonly emergencyPhoneNumber?: string,
    readonly dependent?: FullnameAPIInterface[],
    readonly facilityId?: string,
    readonly staffCode?: string,
    readonly workStyle?: WorkStyle,
    readonly profession?: ProfessionType,
    readonly workTime?: WorkTime | string,
    readonly socialInsuranceCode?: string,
    readonly socialInsuranceNumber?: string,
    readonly hireDate?: DateTime,
    readonly leaveDate?: DateTime
  ) {}
}
