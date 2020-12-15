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

export default class TakebreakSpecification implements PunchSpecification {
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
      timecardCollection.filter((timecard) => timecard.attendance).size() <= 0
    ) {
      error = errorMessageList.ProhiviteTakebreakBeforeAttend;
    } else if (
      0 < timecardCollection.filter((timecard) => timecard.leavework).size()
    ) {
      error = errorMessageList.ProhiviteTakebreakAfterLeavework;
    } else if (
      0 < timecardCollection.filter((timecard) => timecard.endbreak).size()
    ) {
      error = errorMessageList.ProhiviteTakebreakAfterEndbreak;
    }

    if (isString(error)) {
      logger.app.warn(`${error}`);
      throw error;
    } else {
      return true;
    }
  }
}
