import Employee from "../../entity/employee/employee";
import Timecard from "../../entity/timecard/Timecard";
import PunchAction from "./punchAction";
import TimecardRepository from "../../repository/timecard/timecardRepository";
import { inject } from "inversify";
import Types from "../../../../../util/di/types";
import Coordinate from "../../valueObject/coordinate";
import EntityFactory from "../../entity/entityFactory";
import PunchSpecification from "../specification/punchSpecification";
import { DateTime } from "luxon";
import logger from "src/util/logger/logger";
import TakebreakSpecification from '../specification/takebreakSpecification';

export default class PunchTakebreakAction implements PunchAction {
  constructor(
    private specification: PunchSpecification,
    private punchDate: DateTime,
    private coordinate?: Coordinate
  ) {if (!(specification instanceof TakebreakSpecification)) {
    logger.system.warn(`specificationが想定したものと異なります。`)
  }}

  @logger.debug.traceMethodCall
  async punched(employee: Employee): Promise<Timecard> {
    this.specification
      .punchable(employee, this.punchDate, this.coordinate)
      .catch((error) => {
        logger.app.warn(`${error}`);
        throw error;
      });

    return new EntityFactory()
      .timecard()
      .createTakebreak(employee, this.punchDate, this.coordinate);
  }
}
