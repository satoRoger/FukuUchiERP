import { injectable } from "inversify";
import "reflect-metadata";
import Timecard from "../../domain/attendanceManagement/timecard/timecard";
import TimecardRepository from "../../domain/attendanceManagement/timecard/timecardRepository";
import { TimecardSearchResult } from "../../domain/attendanceManagement/timecard/timecardSearchResult";

@injectable()
export default class RepositoryOnMemory implements TimecardRepository {
  private timecardArray: Array<Timecard>;

  save = (timecard) => {
    return new Promise<common.Result>(() => {
      "tt";
    });
  };
  findAll = (employee) => {
    console.log("success");
    return new Promise<TimecardSearchResult>(() => {});
  };

  findWithDuration = (employee) => {
    return new Promise<TimecardSearchResult>(() => {});
  };

  tes = () => {
    console.log("success");
  };
}
