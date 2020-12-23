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

export default async function PostUsers(
  param: UsersPostParam
): Promise<UsersResponseInterface> {
  const response = container.get<UsersResponseInterface>(
    Types.UsersResponse
  );

  const repository = container.get<UsersRepository>(
    Types.UsersRepository
  );

  const person = new PersonFactory().create(
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
