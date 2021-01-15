import TimecardsQuery from "../../interactor/src/InteractorObject/timecards/timecardsQuery";
import UsersDeleteParam from "../../interactor/src/InteractorObject/users/usersDeleteParam";
import UsersPostParam from "../../interactor/src/InteractorObject/users/usersPostParam";
import UsersPutParam from "../../interactor/src/InteractorObject/users/usersPutParam";
import UsersQuery from "../../interactor/src/InteractorObject/users/usersQuery";
import GetTimecards from "../../interactor/src/timecard/getTimecards";
import DeleteUsers from "../../interactor/src/users/deleteUsers";
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

export function DeleteUsersRouter(param: UsersDeleteParam) {
  return DeleteUsers(param);
}