import UsersQuery from "../../../interactor/src/InteractorObject/users/usersQuery";

export default class ValidateUsersQuery {
  constructor() {}

  createWithValid(): UsersQuery | undefined {
    return new UsersQuery();
  }
}
