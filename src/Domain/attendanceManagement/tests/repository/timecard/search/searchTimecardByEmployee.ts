import EntityEquivalent from "../../../../service/entityEquivalent";
describe("searchTimecardByEmployee", () => {
  let seachTimecard;
  let createdTimecard;
  let employee;
  let coordinate;
  let punchDate;

  beforeAll(() => {
    const repository = new EntityRepository().getTimecardRepository();
    seachTimecard = new SearchTimecardByEmployee(repository);

    employee = new EntityFactory.createEmployee("test01");
    coordinate = new Coordinate(20, 20);
    punchDate = new Date(2020, 10, 10, 5, 5, 5);
    const specification = new PunchSpecification().getAttendance();

    const action = new PunchTimecardFactory().createAttendance(
      punchDate,
      specification,
      coordinate
    );
    createdTimecard = employee.punchAction(action);

    const command = new RepositoryCommandFactory().saveTimecard(
      createdTimecard
    );

    repository.save(command);
  });

  test("search", () => {
    const timecardCollection = seachTimecard.search(employee);
    const timecard = timecardCollection.latestTimecard();
    expect(new EntityEquivalent().timecard(timecard, createdTimecard)).toBe(
      true
    );
  });
});
