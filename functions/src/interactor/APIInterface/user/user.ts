import FullnameAPIInterface from "./fullname";
import Fullname from "./fullname";

export default interface UserAPIInterface {
  address: string;
  birthDate: string;
  dependent: FullnameAPIInterface[];
  emergencyPhoneNmber: string;
  facilityId: string;
}
