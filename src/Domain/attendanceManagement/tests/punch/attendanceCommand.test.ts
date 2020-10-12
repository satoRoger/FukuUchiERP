describe("attendanceCommand", (): void => {
  test("", () => {
	const command = new CommandFactory<PunchTimecard>.create(PunchType.attendance);
	const employee = new EntitiyFactory<Employee>.create("test01");
	const punchDate = new Date();
	const coodinate = new Coodinate(10,10);
	
	const repository = new RepositoryFactory<TimecardRepository>.create();
	const specification = new PunchSpecificationFactory.createAttendance();
	
	command.exec(employee,punchDate,coodinate,repository,specification).then(timecard=>{
		repository.find(new RepositorySearch<Employee>(employee)).then(result=>{
			expect(new IsEqual<Timecard>(result.getLatestTimecard(),timecard).equal()).toBe(true);
		});
	});
  });

});
