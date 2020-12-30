import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import UsersPostParam from "../InteractorObject/users/usersPostParam";
import UsersResponseInterface from "../InteractorObject/users/usersResponse";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UsersObject from "../InteractorObject/users/usersObject";
import UserAPIInterface from "../APIInterface/user/user";
import FullnameAPIInterface from "../APIInterface/user/fullname";

export default async function PostUsers(
  param: UsersPostParam
): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const person = new PersonFactory().create(
    "empty",
    param.rollType,
    param.mail,
    param.birthdate,
    param.phoneNumber,
    param.emergencyPhoneNumber,
    param.address,
    param.fullname,
    param.dependent,
    param.facilityId,
    param.staffCode,
    param.workStyle,
    param.profession,
    param.workTime,
    param.socialInsuranceCode,
    param.socialInsuranceNumber
  );

  const user = await repository.save(person);

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

  const response: UserAPIInterface = {
    id: user.id.value,
    mail: user.mail.value,
    rollType: user.roll,
    address: user.address?.value,
    birthDate: user.birthdate?.value,
    dependent: dependent,
    emergencyPhoneNumber: user.emergencyPhoneNumber?.value,
    facilityId: user.facility?.id.value,
    fullname: fullname,
    phoneNumber: user.phoneNumber?.value,
    profession: user.profession,
    socialInsuranceCode: user.socialInsurance?.code.value,
    socialInsuranceNumber: user.socialInsurance?.number.value,
    staffCode: user.staffCode?.value,
    workStyle: user.workStyle,
    workTime: user.workTime,
    hireDate: user.hireDate,
    leaveDate: user.leaveDate,
  };
  const result: UserAPIInterface[] = [response];

  return result;
}
