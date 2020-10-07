import  TimecardDTO  from "../dto/timecardDto";

export interface TimecardSearchResult {
  readonly employeeId: string;
  readonly searchResult: Array<TimecardDTO>;
}
