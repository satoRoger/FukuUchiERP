describe("timecardSearchのテスト", (): void => {
  test("ある日にち範囲の特定の人の勤怠情報を取得できるか", () => {
	  const timecardSearch = new TimecardSearch();
	  
	  const searchEmployee = [];
	  const searchResult:TimecardSearchResult = 
	  timecardSearch.searchMultipleEmployeeWithDuration();
	  
  });
});
