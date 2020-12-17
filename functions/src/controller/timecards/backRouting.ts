import TimecardsQuery from "../../interactor/InteractorObject/timecards/timecardsQuery";
import GetTimecarsFromAllUsers from "../../interactor/timecard/getTimecardsFromAllUser";

export function GetTimecardsFromAllUserRouter(query: TimecardsQuery) {
  return GetTimecarsFromAllUsers(query);
}
