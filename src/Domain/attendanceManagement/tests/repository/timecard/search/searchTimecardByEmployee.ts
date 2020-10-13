describe('searchTimecardByEmployee', () => {
	let seachTimecard ;
	let createdTimecard;
	
	beforeAll(()=>{
		const repository = new EntityRepository().getTimecardRepository();
		seachTimecard = new SearchTimecardByEmployee(repository);
		
		const employee = new EntityFactory.createEmployee("test01");
		const coordinate = new Coordinate(20,20);
		const punchDate = new Date(2020,10,10,5,5,5);
	  const specification = new PunchSpecification().getAttendance();
	  
	  const action = new PunchTimecardFactory().createAttendance(punchDate,specification,coordinate);
	  createdTimecard = employee.punchAction(action);
	  
	  const command = new RepositoryCommandFactory().saveTimecard(timecard);
	  
	  
	})
	
	test('search', () => {
		const timecardCollection = seachTimecard.search(employee1);
		
	})
})
