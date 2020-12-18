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

async function PostTimecards(
  param: TimecardsPostParam
): Promise<TimecardsResponseInterface> {
  const response = container.get<TimecardsResponseInterface>(
    Types.TimecardsResponse
  );

  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const timecard = new TimecardFactory().createTimecard(
    new EmployeeId(param.userId),
    param.cardType,
    param.punchDate,
    param.latitude,
    param.longitude
  );

  repository.save(timecard);

  const result: TimecardsObject[] = [
    new TimecardsObject(
      timecard.punchEmployeeId.value,
      timecard.punchDate,
      timecard.cardtype,
      timecard.coordinate?.longitude(),
      timecard.coordinate?.latitude()
    ),
  ];

  response.setResult(result);
  return response;
}

export default PostTimecards;
