import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";

export default async function GetUsers(): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const collection = await repository.search();
  return collection
    .getData()
    .map((person) => UserAPIInterface.fromDomainUser(person));
}
