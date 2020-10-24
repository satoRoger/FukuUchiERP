import TimecardRepository from "../../repository/timecard/timecardRepository";
import PunchSpecification from "./punchSpecification";
import Employee from "../../entity/employee/employee";
import Coordinate from "../../valueObject/coordinate";
import { inject } from "inversify";
import Types from "@/di/types";
import { DateTime, Duration } from "luxon";
import { errorMessageList } from "@/domain/attendanceManagement/src/common/message";
import { dayStart, isString } from "../../common/utility";
import logger from "../../../../../util/logger/logger";

export default class LeaveworkSpecification implements PunchSpecification {
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
      error = errorMessageList.ProhiviteLeaveworkBeforeAttend;
    } else if (
      timecardCollection
        .filter((timecard) => timecard.isTakebreak() && !timecard.isEndbreak())
        .size() <= 0
    ) {
      error = errorMessageList.ProhiviteLeaveworkNeedToEndbreak;
    }

    if (isString(error)) {
      logger.app.warn(`${error}`);
      throw error;
    } else {
      return true;
    }
  }
}
