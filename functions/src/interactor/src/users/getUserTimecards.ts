import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import CoordinateAPIInterface from "../APIInterface/timecard/coordinate";
import TimecardAPIInterface from "../APIInterface/timecard/timecard";

export default async function GetUserTimecards(): Promise<TimecardAPIInterface[]> {
  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const collection = await repository.search();

  const result: TimecardAPIInterface[] = [];
  for (let timecard of collection) {
    const coordinate: CoordinateAPIInterface | undefined = timecard.coordinate
      ? {
          latitude: timecard.coordinate.latitude(),
          longitude: timecard.coordinate.longitude(),
        }
      : undefined;

    result.push({
      id: timecard.id.value,
      cardType: timecard.cardtype,
      date: timecard.punchDate.toISO({ includeOffset: false }),
      userId: timecard.punchEmployeeId.value,
      coordinate: coordinate,
    });
  }

  return result;
}
