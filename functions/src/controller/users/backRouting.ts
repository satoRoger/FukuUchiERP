import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import UsersPostParam from "../../interactor/src/InteractorObject/users/usersPostParam";
import UsersPutParam from "../../interactor/src/InteractorObject/users/usersPutParam";
import UsersQuery from "../../interactor/src/InteractorObject/users/usersQuery";
import GetTimecards from "../../interactor/src/timecard/getTimecards";
import GetUsers from "../../interactor/src/users/getUsers";
import PostUsers from "../../interactor/src/users/postUsers";
import PutUsers from "../../interactor/src/users/putUsers";

export function GetUsersRouter(query: UsersQuery) {
  return GetUsers(query);
}
export function PostUsersRouter(param: UsersPostParam) {
  return PostUsers(param);
}

export function PutUsersRouter(param: UsersPutParam) {
  return PutUsers(param);
}
