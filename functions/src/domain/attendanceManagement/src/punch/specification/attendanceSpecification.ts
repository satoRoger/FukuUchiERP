import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import { inject } from "inversify";
import { DateTime } from "luxon";
import logger from "../../../../../util/logger/logger";
import { dayStart, isString } from "../../common/utility";
import { errorMessageList } from "../../common/message";
import Types from "../../../../../util/di/types";

export default class AttendanceSpecification implements PunchSpecification {
  constructor(
    @inject(Types.TimecardRepository) private repository: TimecardRepository
  ) {}

  @logger.debug.traceMethodCall
  async punchable(
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): Promise<boolean> {
    const timecardCollection = await this.repository.search(
      employee,
      dayStart(punchDate),
      punchDate
    );

    let error: string | undefined = undefined;
    if (
      0 < timecardCollection.filter((timecard) => timecard.endbreak).size()
    ) {
      error = errorMessageList.ProhiviteAttendanceAfterLeavework;
    }

    if (isString(error)) {
      logger.app.warn(`${error}`);
      throw error;
    } else {
      return true;
    }
  }
}
