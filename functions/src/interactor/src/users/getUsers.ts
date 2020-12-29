import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import UsersResponseInterface from "../InteractorObject/users/usersResponse";
import UsersObject from "../InteractorObject/users/usersObject";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";

export default async function GetUsers(
): Promise<UsersResponseInterface> {
  const response = container.get<UsersResponseInterface>(
    Types.UsersResponse
  );

  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const collection = await repository.search();
  const result: UsersObject[] = [];
  for (let {} of collection) {
    result.push(new UsersObject());
  }

  response.setResult(result);
  return response;
}
