import TimecardsQuery from "../../interactor/InteractorObject/timecards/timecardsQuery";
import GetTimecarsFromAllUsers from "../../interactor/timecard/getTimecardsFromAllUser";
import TimecardsPostParam from "../../interactor/InteractorObject/timecards/timecardsPostParam";
import PostTimecards from "../../interactor/timecard/postTimecards";

export function GetTimecardsFromAllUserRouter(query: TimecardsQuery) {
  return GetTimecarsFromAllUsers(query);
}

export function PostTimecardRouter(param: TimecardsPostParam) {
  return PostTimecards(param);
}
