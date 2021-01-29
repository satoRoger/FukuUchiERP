import TimecardsQuery from "../../../interactor/src/InteractorObject/timecards/timecardsQuery";
import TimecardsPostParam from "../../../interactor/src/InteractorObject/timecards/timecardsPostParam";
import PostTimecards from "../../../interactor/src/timecard/postTimecards";
import GetTimecars from "../../../interactor/src/timecard/getTimecards";

export function GetTimecardsRouter(query: TimecardsQuery) {
  return GetTimecars(query);
}

export function PostTimecardRouter(param: TimecardsPostParam) {
  return PostTimecards(param);
}
