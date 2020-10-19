import Employee from "../../entity/employee/employee";
import Timecard from "../../entity/timecard/Timecard";
import PunchAction from "./punchAction";
import TimecardRepository from "../../repository/timecard/timecardRepository";
import { inject } from "inversify";
import Types from "../../../../../di/types";
import Coordinate from "../../valueObject/coordinate";
import EntityFactory from "../../entity/entityFactory";
import PunchSpecification from "../specification/punchSpecification";
import { DateTime } from "luxon";

export default class PunchAttendanceAction implements PunchAction {
  constructor(
    @inject(Types.TimecardRepository) private specification: PunchSpecification,
    private punchDate: DateTime,
    private coordinate?: Coordinate
  ) {}

  punched: (employee: Employee) => Promise<Timecard> = (employee) => {
    return new Promise((resolve, reject) => {
      this.specification
        .punchable(employee, this.punchDate, this.coordinate)
        .catch((error) => reject(error));

      resolve(
        new EntityFactory()
          .timecard()
          .createAttendance(employee, this.punchDate, this.coordinate)
      );
    });
  };
}
