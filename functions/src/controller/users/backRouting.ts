import UsersPostParam from "../../interactor/InteractorObject/users/usersPostParam";
import UsersQuery from "../../interactor/InteractorObject/users/usersQuery";
import GetUsers from "../../interactor/users/getUsers";
import PostUsers from "../../interactor/users/postUsers";

export function GetUsersRouter(query: UsersQuery) {
  return GetUsers();
}

export function PostUsersRouter(param: UsersPostParam) {
  return PostUsers(param);
}
