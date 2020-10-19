import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import PunchAction from "../action/punchAction";

export default class AttendanceSpecification implements PunchSpecification {
  constructor(private repository: TimecardRepository) {}
  punchable: (employee: Employee, action: PunchAction) => Promise<boolean> = (
    employee
  ) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };
}
