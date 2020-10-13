describe('searchTimecardByEmployee', () => {
	let seachTimecard ;
	let employee1;
	let employee2;
	
	
	beforeAll(()=>{
		const repository = new EntityRepository().getTimecardRepository();
		seachTimecard = new SearchTimecardByEmployee(repository);
		
		employee1 = new EntityFactory.createEmployee("test01");
		employee2 = new EntityFactory.createEmployee("test02");
		
		const specification = new PunchSpecification().getAttendance();
		
		const command1 = new PunchCommand().createAttendance
		(new Date(2020,10,10),repository,specification,new Coordinate(20,20));
		
		const command2 = new PunchCommand().createAttendance
		(new Date(2020,10,20),repository,specification,new Coordinate(10,20));
		
		const command3 = new PunchCommand().createAttendance
		(new Date(2020,8,10),repository,specification,new Coordinate(20,28));
		
		employee1.punchCommand(command1);
		employee1.punchCommand(command2);
		employee2.punchCommand(command3);
		
	})
	
	test('search', () => {
		const timecardCollection = seachTimecard.search(employee1);
		
	})
})
