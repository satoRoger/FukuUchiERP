describe("timecardSearchのテスト", (): void => {
  test("ある日にち範囲の特定の人の勤怠情報を取得できるか", () => {
	  const ts = new TimecardSearch();
	      
	  const testEmployee = [new EmployeeId("test01"),new EmployeeId("test02")];
	  const testTimecard = new mockTimecard().create(testEmployee,new Date(2020,10,23));

	  
	  const repository:TimecardRepository = new RepositoryFactory().create();
	  
	  const searchResult:TimecardSearchResult = 
	  ts.searchMultipleEmployeeWithDuration(repository,testEmployee,new Date(2020,10,1),new Date(2020,11,1));
	  
	  for(let timecards:TimeCardCollection in searchResult.getTimecardsByEmployee()){
		  for(let i in timecards){
			expect(timecards[i].getDto().equal(testTimecard[i].getDto())).toBe(true);
		  }
	  } 
  });
  
  
  test("", () => {
	  
  });
  
});
