import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UsersDeleteParam from "../InteractorObject/users/usersDeleteParam";
import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import DeleteUserFirebaseAuth from "../../../framework/firebase/authority/deleteUsrFirebaseAuth";

export default async function DeleteUsers(
  param: UsersDeleteParam
): Promise<string> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const personId = new PersonId(param.userId);
  const id = await repository.remove(personId);
  await DeleteUserFirebaseAuth(personId);
  
  return id.value;
}
