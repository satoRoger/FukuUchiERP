import TimecardsQuery from "../InteractorObject/timecards/timecardsQuery";
import TimecardsResponseInterface from "../InteractorObject/timecards/timecardsResponse";
import { DateTime } from "luxon";
import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EmployeeFactory from "../../domain/attendanceManagement/src/entity/employee/employeeFactory";
import TimecardsObject from "../InteractorObject/timecards/timecardsObject";

async function GetTimecarsFromAllUsers(
  query: TimecardsQuery
): Promise<TimecardsResponseInterface> {
  const response = container.get<TimecardsResponseInterface>(
    Types.TimecardsResponse
  );

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
  const result: TimecardsObject[] = [];

  for (let timecard of collection) {
    result.push(
      new TimecardsObject(
        timecard.punchEmployeeId.value,
        timecard.punchDate,
        timecard.cardtype
      )
    );
  }

  response.setResult(result);
  return response;
}

export default GetTimecarsFromAllUsers;
