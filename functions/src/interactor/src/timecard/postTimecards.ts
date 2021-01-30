import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardsPostParam from "../InteractorObject/timecards/timecardsPostParam";
import TimecardFactory from "../../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import EmployeeId from "../../../domain/attendanceManagement/src/valueObject/employeeId";
import TimecardId from "../../../domain/attendanceManagement/src/valueObject/timecardId";
import TimecardAPIInterface from "../APIInterface/timecard/timecard";

async function PostTimecards(
  param: TimecardsPostParam
): Promise<TimecardAPIInterface[]> {
  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const timecard = new TimecardFactory().createTimecard(
    new TimecardId(""),
    new EmployeeId(param.userId),
    param.cardType,
    param.punchDate,
    param.latitude,
    param.longitude
  );

  const newTimecard = await repository.add(timecard);

  const result: TimecardAPIInterface[] = [
    TimecardAPIInterface.fromDomainTimecard(newTimecard),
  ];

  return result;
}

export default PostTimecards;
