import { injectable } from "inversify";

@injectable()
export default class RepositoryOnMemory
  implements attendance.TimecardRepository {
  private timecardArray: Array<attendance.Timecard>;

  save: (timecard: attendance.Timecard) => Promise<common.Result> = (
    timecard
  ) => {
    return new Promise<common.Result>(() => {
      "tt";
    });
  };
  findAll: (
    employee: attendance.Employee
  ) => Promise<attendance.TimecardSearchResult> = (employee) => {
    return new Promise<attendance.TimecardSearchResult>(()=>{});
  };

  findWithDuration: (
    employee: attendance.Employee,
    from: Date,
    to: Date
  ) => Promise<attendance.TimecardSearchResult> = (employee) => {
    return new Promise<attendance.TimecardSearchResult>(()=>{});
  };
}
