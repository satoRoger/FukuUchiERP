import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardAPIInterface from "../APIInterface/timecard/timecard";
import Coordinate from "../../../domain/attendanceManagement/src/valueObject/coordinate";

export default async function GetUserTimecards(): Promise<
  TimecardAPIInterface[]
> {
  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const collection = await repository.search();

  return collection
    .getData()
    .map((timecard) => TimecardAPIInterface.fromDomainTimecard(timecard));
}
