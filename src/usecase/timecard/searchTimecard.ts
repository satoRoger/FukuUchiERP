import { ErrorMessage } from "@/common/message";
import { Result } from "@/common/result";
import { inject, injectable } from "inversify";
import Types from "../../di/types";
import TimecardDTO from "../../domain/attendanceManagement/dto/timecardDto";
import Employee from "../../domain/attendanceManagement/employee/employee";
import TimecardRepository from "../../domain/attendanceManagement/timecard/timecardRepository";

class TimecardSearchResult implements TimecardSearchResult {
  readonly employeeId: string;
  readonly searchResult: Array<TimecardDTO>;

  constructor(employeeId: string, searchResult: Array<TimecardDTO>) {
    this.employeeId = employeeId;
    this.searchResult = searchResult;
  }
}

@injectable()
export default class SearchTimecard implements SearchTimecard {
  @inject(Types.TimecardRepository) private repository: TimecardRepository;

  search: (
    employee: Employee
  ) => Promise<Result<TimecardSearchResult, ErrorMessage>> = async (
    employee
  ) => {
    const result = await this.repository.findAll(employee);
    return result;
  };
}
