import SearchTimecardByEmployee from "@/adapter/src/repository/repositoryOnMemory/search/searchTimecardByEmployee";
import container from "@/di/inversify.config";
import TestTypes from "@/di/testTypes";
import Employee from "@/domain/attendanceManagement/src/entity/employee/employee";
import EntityFactory from "@/domain/attendanceManagement/src/entity/entityFactory";
import Timecard from "@/domain/attendanceManagement/src/entity/timecard/Timecard";
import PunchActionFactory from "@/domain/attendanceManagement/src/punch/punchActionFactory";
import PunchSpecificationFactory from "@/domain/attendanceManagement/src/punch/punchSpecificationFactory";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import EntityEquivalent from "@/domain/attendanceManagement/src/service/entityEquivalent";
import Coordinate from "@/domain/attendanceManagement/src/valueObject/coordinate";
import "reflect-metadata";
import testContainer from "@/di/inversifyTest.config";
import { DateTime } from "luxon";

const repository = testContainer.get<TimecardRepository>(
  TestTypes.TimecardRepository
);

describe("searchTimecardByEmployee", () => {
  let seachTimecard: SearchTimecardByEmployee;
  let createdTimecard: Timecard;
  let employee: Employee;
  let coordinate: Coordinate;
  let punchDate: DateTime;

  beforeAll(async () => {
    seachTimecard = new SearchTimecardByEmployee(repository);

    employee = new EntityFactory().employee().createByRowId("test01");
    coordinate = new Coordinate(20, 20);
    punchDate = DateTime.fromISO("2020-10-10T05:05:05");
    const specification = new PunchSpecificationFactory().getAttendance(
      repository
    );

    const action = new PunchActionFactory().actionAttendance(
      specification,
      punchDate,
      coordinate
    );
    createdTimecard = await employee.punchTimecard(action);

    repository.save(createdTimecard);
  });

  test("search", async () => {
    const timecardCollection = await seachTimecard.search(employee);
    const timecard = timecardCollection.latestTimecard();
    expect(
      new EntityEquivalent().equalTimecard(timecard, createdTimecard)
    ).toBe(true);
  });
});
