import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import UsersPostParam from "../../interactor/src/InteractorObject/users/usersPostParam";
import UsersQuery from "../../interactor/src/InteractorObject/users/usersQuery";
import GetTimecards from "../../interactor/src/timecard/getTimecards";
import GetUsers from "../../interactor/src/users/getUsers";
import PostUsers from "../../interactor/src/users/postUsers";

export function GetUsersRouter(query: UsersQuery) {
  return GetUsers(query);
}
export function PostUsersRouter(param: UsersPostParam) {
  return PostUsers(param);
}
