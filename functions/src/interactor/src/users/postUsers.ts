import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import UsersPostParam from "../InteractorObject/users/usersPostParam";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";
import newUserMail from "../../../framework/firebase/authority/newUserMail";

export default async function PostUsers(
  param: UsersPostParam
): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const person = new PersonFactory().create(
    "",
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
    param.socialInsuranceNumber,
    param.hireDate,
    param.leaveDate
  );

  const user = await repository.save(person);

  const mail = await newUserMail(user);

  console.log({ mail });
  const response: UserAPIInterface = UserAPIInterface.fromDomainUser(user);

  const result: UserAPIInterface[] = [response];

  return result;
}
