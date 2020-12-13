import TimecardsQuery from "../../interactor/InteractorObject/timecardsQuery";
import GetTimecarsFromAllUsers from "../../interactor/timecard/getTimecardsFromAllUser";

export function GetTimecardsFromAllUserRouter(query: TimecardsQuery) {
  return GetTimecarsFromAllUsers(query);
}
