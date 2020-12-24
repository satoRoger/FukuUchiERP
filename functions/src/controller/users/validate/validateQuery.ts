import UsersQuery from "../../../interactor/InteractorObject/users/usersQuery";

export default class ValidateTimecardsQuery {
  constructor() {}

  createWithValid(): UsersQuery | undefined {
    return new UsersQuery();
  }
}
