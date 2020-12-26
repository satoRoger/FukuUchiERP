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
import UsersPostParam from "../InteractorObject/users/usersPostParam";
import UsersResponseInterface from "../InteractorObject/users/usersResponse";
import timecard from "../../domain/attendanceManagement/src/entity/timecard/timecard";
import PersonFactory from "../../domain/resourceManager/src/entity/person/personFactory";
import PersonRepository from "../../domain/resourceManager/src/repository/personRepostitory";
import UsersObject from "../InteractorObject/users/usersObject";

export default async function PostUsers(
  param: UsersPostParam
): Promise<UsersResponseInterface> {
  const response = container.get<UsersResponseInterface>(Types.UsersResponse);

  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const person = new PersonFactory().create();

  repository.save(person);

  const result: UsersObject[] = [];

  response.setResult(result);
  return response;
}
