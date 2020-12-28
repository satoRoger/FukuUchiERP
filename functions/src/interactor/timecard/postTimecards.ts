import TimecardsQuery from "../InteractorObject/timecards/timecardsQuery";
import TimecardsResponseInterface from "../InteractorObject/timecards/timecardsResponse";
import { DateTime } from "luxon";
import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EmployeeFactory from "../../domain/attendanceManagement/src/entity/employee/employeeFactory";
import TimecardsObject from "../InteractorObject/timecards/timecardsObject";
import TimecardsPostParam from "../InteractorObject/timecards/timecardsPostParam";
import TimecardFactory from "../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import EmployeeId from "../../domain/attendanceManagement/src/valueObject/employeeId";
import TimecardId from "../../domain/attendanceManagement/src/valueObject/timecardId";
import TimecardAPIInterface from "../APIInterface/timecard/timecard";

async function PostTimecards(
  param: TimecardsPostParam
): Promise<TimecardAPIInterface[]> {
  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const timecard = new TimecardFactory().createTimecard(
    new TimecardId("empty"),
    new EmployeeId(param.userId),
    param.cardType,
    param.punchDate,
    param.latitude,
    param.longitude
  );

  const newTimecard = await repository.save(timecard);

  const coordinate = newTimecard.coordinate
    ? {
        longitude: newTimecard.coordinate.longitude(),
        latitude: newTimecard.coordinate.longitude(),
      }
    : undefined;
  
  const result: TimecardAPIInterface[] = [
    {
      cardType: newTimecard.cardtype,
      date: newTimecard.punchDate.toISO({ includeOffset: false }),
      id: newTimecard.id.value,
      userId: newTimecard.punchEmployeeId.value,
      coordinate: coordinate,
    },
  ];

  result.push();

  return result;
}

export default PostTimecards;
