import RollType from "../../../../domain/resourceManager/src/valueObject/rollType";
import { DateTime } from "luxon";
import WorkStyle from "../../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../../domain/resourceManager/src/valueObject/worktime";
import Fullname from '../../../../domain/resourceManager/src/valueObject/fullname';

export default interface UserAPIInterface {
  id: string;
  rollType: RollType;
  mail: string;
  birthDate?: DateTime;
  phoneNumber?: string;
  emergencyPhoneNumber?: string;
  address?: string;
  fullname?: Fullname;
  dependent?: Fullname[];
  facilityId?: string;
  staffCode?: string;
  workStyle?: WorkStyle;
  profession?: ProfessionType;
  workTime?: WorkTime | string;
  socialInsuranceCode?: string;
  socialInsuranceNumber?: string;
  hireDate?: DateTime;
  leaveDate?: DateTime;
}
