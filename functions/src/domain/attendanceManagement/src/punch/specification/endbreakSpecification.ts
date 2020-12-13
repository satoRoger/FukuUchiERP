import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import { inject } from "inversify";
import { DateTime, Duration } from "luxon";
import { dayStart, isString } from "../../common/utility";
import logger from "../../../../../util/logger/logger";
import Types from "../../../../../util/di/types";
import { errorMessageList } from "../../common/message";

export default class EndbreakSpecification implements PunchSpecification {
  constructor(
    @inject(Types.TimecardRepository) private repository: TimecardRepository
  ) {}

  @logger.debug.traceMethodCall
  async punchable(
    employee: Employee,
    punchDate: DateTime,
    coordinate?: Coordinate
  ): Promise<boolean> {
    const timecardCollection = await this.repository.searchByEmployee(
      employee,
      dayStart(punchDate),
      punchDate
    );

    let error: string | undefined = undefined;
    if (
      timecardCollection.filter((timecard) => timecard.isAttendance()).size() <=
      0
    ) {
      error = errorMessageList.ProhiviteEndbreakBeforeAttend;
    } else if (
      0 < timecardCollection.filter((timecard) => timecard.isLeavework()).size()
    ) {
      error = errorMessageList.ProhiviteEndbreakAfterLeavework;
    } else if (
      timecardCollection.filter((timecard) => timecard.isTakebreak()).size() <=
      0
    ) {
      error = errorMessageList.ProhiviteEndbreakBeforeTakebreak;
    }

    if (isString(error)) {
      logger.app.warn(`${error}`);
      throw error;
    } else {
      return true;
    }
  }
}
