import TimecardDTO from "../dto/dataStructure/timecardDto";

export default class TimecardSearchResult {
  private employeeId: string;
  private searchResult: Array<TimecardDTO>;

  constructor(employeeId: string, searchResult: Array<TimecardDTO>){
    this.employeeId = employeeId;
    this.searchResult = searchResult;
  };
  
  public *[Symbol.iterator]() {
    this.searchResult.forEach((t) => yield t);
  }

  public getEmployeeId: () => string = () => {
    return this.employeeId;
  };
  public size: () => number = () => {
    return Array.length;
  };
}
