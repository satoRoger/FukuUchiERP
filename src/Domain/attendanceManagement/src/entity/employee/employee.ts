import PunchAction from "../../punch/action/punchAction";
import PunchSpecification from "../../punch/specification/punchSpecification";
import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";
import EmployeeId from "../../valueObject/employeeId";
import Timecard from "../timecard/Timecard";
import logger from "../../../../../util/logger/logger";

export default class Employee {
  constructor(private employeeId: EmployeeId) { }
  
  get id(): EmployeeId {
    return this.employeeId;
  }

  @logger.debug.traceMethodCall
  async punchTimecard(action: PunchAction): Promise<Timecard> {
    logger.app.info(`「${this.employeeId}」が勤怠を行いました`);

    try {
      return await action.punched(this);
    } catch (error) {
      logger.app.warn(`「${this.employeeId}」が勤怠を失敗しました。理由:「${error}」`);
      throw error;
    }
  }
}
