import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import UsersPostParam from "../InteractorObject/users/usersPostParam";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";

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

  console.log(person);
  const user = await repository.save(person);

  const response: UserAPIInterface = UserAPIInterface.fromDomainUser(user);

  const result: UserAPIInterface[] = [response];

  return result;
}
