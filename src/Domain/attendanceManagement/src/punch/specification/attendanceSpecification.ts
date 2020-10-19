import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import { inject } from "inversify";
import Types from "@/di/types";
import { DateTime } from "luxon";

export default class AttendanceSpecification implements PunchSpecification {
  constructor(
    @inject(Types.TimecardRepository) private repository: TimecardRepository
  ) {}
  punchable: (
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ) => Promise<boolean> = () => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };
}
