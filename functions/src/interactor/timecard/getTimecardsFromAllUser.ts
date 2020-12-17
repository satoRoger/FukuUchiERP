import TimecardsQuery from "../InteractorObject/timecards/timecardsQuery";
import TimecardsResponseInterface from "../InteractorObject/timecards/timecardsResponse";
import { DateTime } from "luxon";
import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EmployeeFactory from "../../domain/attendanceManagement/src/entity/employee/employeeFactory";
import Timecard from "../../domain/attendanceManagement/src/entity/timecard/Timecard";
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

  const collection = await repository.search(
    new EmployeeFactory().createByRowId("tes"),
    DateTime.local(),
    DateTime.local()
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

  console.log(result);
  response.setResult(result);
  return response;
}

export default GetTimecarsFromAllUsers;
