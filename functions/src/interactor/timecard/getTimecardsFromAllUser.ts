import TimecardsQuery from "../InteractorObject/timecardsQuery";
import TimecardsResponseInterface from "../InteractorObject/timecardsResponse";
import { DateTime } from "luxon";
import container from "../../util/di/inversify.config";
import Types from "../../util/di/types";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";

function GetTimecarsFromAllUsers(
  query: TimecardsQuery
): TimecardsResponseInterface {
  const response = container.get<TimecardsResponseInterface>(
    Types.TimecardsResponse
  );

  const repository = container.get<TimecardRepository>(
    Types.TimecardRepository
  );

  response.setResult([
    {
      userId: 1,
      date: DateTime.local(),
      type: "breakin",
      latitude: 0.0,
      longitude: 0.0,
    },
    {
      userId: 1,
      date: DateTime.local(),
      type: "breakin",
      latitude: 0.0,
      longitude: 0.0,
    },
    {
      userId: 1,
      date: DateTime.local(),
      type: "breakin",
      latitude: 0.0,
      longitude: 0.0,
    },
    {
      userId: 1,
      date: DateTime.local(),
      type: "breakin",
      latitude: 0.0,
      longitude: 0.0,
    },
    {
      userId: 1,
      date: DateTime.local(),
      type: "breakin",
      latitude: 0.0,
      longitude: 0.0,
    },
  ]);
  return response;
}

export default GetTimecarsFromAllUsers;
