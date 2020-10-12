import EntityFactory from "../../entity/entityFactory";
import { Coordinate } from "../../valueObject/coordinate";

describe("punchCommand", (): void => {
	let punchDate;
	let coodinate;
	let repository;
	let specification;
	let employee;

	beforeEach(() => {
		punchDate = new Date();
		coodinate = new Coordinate(20, 20);
		repository = new EntityRepository().getTimecardRepository();
		specification = new PunchSpecification().getAttendance();
		employee = new EntityFactory().createEmployee("test01");
	}
  test("", () => {
    const command = new PunchCommand().createAttendance(
      punchDate,
      repository,
      specification,
      coodinate
    );

    employee.punchTimecard(command).then((timecard) => {
      repository.searchByEmployee(employee).then((result) => {
        expect(
          new entityEquivalent().equalTimecard(
            result.getLatestTimecard(),
            timecard
          )
        ).toBe(true);
      });
    });
  });
});
