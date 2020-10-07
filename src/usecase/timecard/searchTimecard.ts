import { inject, injectable } from "inversify";
import DiTypes from "../../di/types";
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

export default interface SearchTimecard {
  search: (employee: Employee) => Promise<TimecardSearchResult>;
  tess: () => void;
}

@injectable()
export default class SearchTimecard implements SearchTimecard {
  @inject(DiTypes.TimecardRepository) private repository: TimecardRepository;

  search: (employee: Employee) => Promise<TimecardSearchResult> = async (
    employee
  ) => {
    const result = await this.repository.findAll(employee);
    return result;
  };
  tess = () => {
    console.log(this.repository);
    this.repository.tes();
  };
}
