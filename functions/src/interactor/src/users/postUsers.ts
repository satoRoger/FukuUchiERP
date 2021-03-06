import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import UsersPostParam from "../InteractorObject/users/usersPostParam";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";
import AddUserFirebaseAuth from "../../../framework/firebase/authority/addUserFirebaseAuth";
import SendValifyMail from "../../../framework/firebase/authority/sendValifyMail";

export default async function PostUsers(
  param: UsersPostParam
): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const person = new PersonFactory().create(
    "",
    param.rollType,
    param.mail,
    param.fullname,
    param.birthdate,
    param.phoneNumber,
    param.emergencyPhoneNumber,
    param.address,
    param.dependent,
    param.facilityId,
    param.staffCode,
    param.workStyle,
    param.workDay,
    param.profession,
    param.workStartTime,
    param.workEndTime,
    param.workTime,
    param.socialInsuranceCode,
    param.socialInsuranceNumber,
    param.hireDate,
    param.leaveDate
  );

  const user = await repository.add(person);

  await AddUserFirebaseAuth(user).catch((err) => {
    console.log(err);
  });
  await SendValifyMail(user);

  const response: UserAPIInterface = UserAPIInterface.fromDomainUser(user);

  const result: UserAPIInterface[] = [response];

  return result;
}
