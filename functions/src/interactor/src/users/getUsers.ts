import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";
import FullnameAPIInterface from "../APIInterface/user/fullname";

export default async function GetUsers(): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const collection = await repository.search();
  const result: UserAPIInterface[] = [];
  for (let user of collection) {
    const dependent = user.dependent
      ? user.dependent?.map((depend) => {
          const response: FullnameAPIInterface = {
            familyName: depend.familyName.value,
            givenName: depend.givenName.value,
          };
          return response;
        })
      : undefined;

    const fullname = user.fullname
      ? {
          familyName: user.fullname?.familyName.value,
          givenName: user.fullname?.givenName.value,
        }
      : undefined;

    const u: UserAPIInterface = {
      id: user.id.value,
      mail: user.mail.value,
      rollType: user.rollType,
      address: user.address?.value,
      birthDate: user.birthdate?.value,
      dependent: dependent,
      emergencyPhoneNumber: user.emergencyPhoneNumber?.value,
      facilityId: user.facility?.id.value,
      fullname: fullname,
      phoneNumber: user.phoneNumber?.value,
      profession: user.professionType,
      socialInsuranceCode: user.socialInsurance?.code.value,
      socialInsuranceNumber: user.socialInsurance?.number.value,
      staffCode: user.staffCode?.value,
      workStyle: user.workStyle,
      workTime: user.workTime,
      hireDate: user.hireDate,
      leaveDate: user.leaveDate,
    };
    result.push(u);
  }
  return result;
}
