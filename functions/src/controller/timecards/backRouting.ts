import TimecardsQuery from "../../interactor/InteractorObject/timecards/timecardsQuery";
import TimecardsPostParam from "../../interactor/InteractorObject/timecards/timecardsPostParam";
import PostTimecards from "../../interactor/timecard/postTimecards";
import GetTimecars from "../../interactor/timecard/getTimecards";

export function GetTimecardsRouter(query: TimecardsQuery) {
  return GetTimecars(query);
}

export function PostTimecardRouter(param: TimecardsPostParam) {
  return PostTimecards(param);
}
