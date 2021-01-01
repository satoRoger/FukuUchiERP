import TimecardsQuery from "../InteractorObject/timecards/timecardsQuery";
import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EmployeeFactory from "../../../domain/attendanceManagement/src/entity/employee/employeeFactory";
import TimecardAPIInterface from "../APIInterface/timecard/timecard";
import CoordinateAPIInterface from "../APIInterface/timecard/coordinate";

export default async function GetTimecars(
  query: TimecardsQuery
): Promise<TimecardAPIInterface[]> {
  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  const queryEmployee = query.userId
    ? new EmployeeFactory().createByRowId(query.userId)
    : undefined;

  const collection = await repository.search(
    queryEmployee,
    query.since,
    query.until
  );

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
      date: timecard.punchDate.toISO({includeOffset:false}),
      userId: timecard.punchEmployeeId.value,
      coordinate: coordinate,
    });
  }

  return result;
}
