import Employee from "@/domain/attendanceManagement/src/entity/employee/employee";
import TimecardCollection from "@/domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";

export default class SearchTimecardByEmployee {
  constructor(private repository: TimecardRepository) {}
  search: (employee: Employee) => Promise<TimecardCollection> = (employee) => {
    return new Promise((resolve, reject) => {
      resolve(new TimecardCollection())
    })
  };
}
