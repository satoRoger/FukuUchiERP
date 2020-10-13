describe('timecard', () => {
	let punchDate;
	let employeeId;
	let coodinate;
	let cardType;
	let timecard;
	
	beforeEach(() => {
		employeeId = new EmployeeId("test01");
		punchDate = new Date(2020,10,10,5,5,5);
		coordinate = new Coordinate(20,20);
		cardType = CardType.attendance;
		timecard = new Timecard(employeeId,punchDate,cardType,coordinate);
		timecardWithoutCoordinate = new Timecard(employeeId,punchDate,cardType);
	})
	
	test('getCoordinate', () => {
	  expect(timecard.getCoordinate().equal(coodinate)).toBe(true);
	})
	test('getEmployeeId', () => {
	  expect(timecard.getEmployeeId().equal(employeeId)).toBe(true);
	})
	test('isCardType', () => {
	  expect(timecard.isCardType(CardType.attendance)).toBe(true);
	  expect(timecard.isCardType(CardType.leaveWork)).toBe(false);
	  expect(timecard.isCardType(CardType.takeBreak)).toBe(false);
	  expect(timecard.isCardType(CardType.endBreak)).toBe(false);
	})
	test('isPunchAfter', () => {
	  expect(timecard.isPunchAfter(new Date(2020,10,10,4,5,5))).toBe(true);
	  expect(timecard.isPunchAfter(new Date(2020,10,6,5,5,5))).toBe(true);
	  expect(timecard.isPunchAfter(new Date(2020,10,14,4,5,5))).toBe(false);
	  expect(timecard.isPunchAfter(new Date(2020,10,10,5,5,5))).toBe(true);
	})
	test('isPunchBefore', () => {
	  expect(timecard.isPunchBefore(new Date(2020,10,10,4,5,5))).toBe(false);
	  expect(timecard.isPunchBefore(new Date(2020,10,6,5,5,5))).toBe(false);
	  expect(timecard.isPunchBefore(new Date(2020,10,14,4,5,5))).toBe(true);
	  expect(timecard.isPunchBefore(new Date(2020,10,10,5,5,5))).toBe(true);
	})
})
