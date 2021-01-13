import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UserAPIInterface from "../APIInterface/user/user";
import UsersQuery from "../InteractorObject/users/usersQuery";
import PersonFactory from "../../../domain/resourceManager/src/entity/person/personFactory";
import PersonId from "../../../domain/resourceManager/src/valueObject/personId";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";

export default async function GetUsers(
  query: UsersQuery
): Promise<UserAPIInterface[]> {
  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const personId = query.userId ? new PersonId(query.userId) : undefined;
  const facilityId = query.facilityId
    ? new FacilityId(query.facilityId)
    : undefined;

  const collection = await repository.search(personId, facilityId);

  return collection.getData().map((person) => {
    return UserAPIInterface.fromDomainUser(person);
  });
}
