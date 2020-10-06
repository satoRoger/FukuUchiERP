import OutputConsole from "#/infrastructure/Console/OutputConsole";
import { inject } from "inversify";
/*
class TimecardSearchResult implements attendance.TimecardSearchResult {
  readonly employeeId: string;
  readonly searchResult: Array<attendance.TimecardDTO>;

  constructor(employeeId: string, searchResult: Array<attendance.TimecardDTO>) {
    this.employeeId = employeeId;
    this.searchResult = searchResult;
  }
}
*/
/*
export interface SearchTimecard {
  search: (employee: attendance.Employee) => Promise<TimecardSearchResult>;
  tess: () => void;
}*/

/*
export class SearchTimecard {
  //@inject("TimecardRepository")
  // private repository: attendance.TimecardRepository;
  search: (
    employee: attendance.Employee
  ) => Promise<TimecardSearchResult> = async (employee) => {
    const result = await this.repository.findAll(employee);
    return result;
};
    tess = () => {
    console.log("tes");
  };
}*/
export default function add(a: number, b: number) {
  return a + b;
}
