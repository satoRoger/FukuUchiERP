import "reflect-metadata";
import Employee from "../../employee/employee";
import { EmployeeId, Coordinate, CardType } from "../../timecard/valueObjects";
import TimecardRepository from "../../timecard/timecardRepository";
import TestTypes from "../../../../di/testTypes";
import { TimecardDtoBuilder } from "../../dto/dataStructure/timecardDto";
import container from "@/di/inversify.config";

describe("従業員", (): void => {
	const id = "test01";
	let employeeId ;
	let employee;
	let coordinate;
	let punchDate;
	
	beforeEach(() => {
		employeeId = new EmployeeId(id);
		employee = new Employee()
		coordinate = new Coordinate(20,20);
		punchDate = new Date(2020,10,10,5,5,5);
	}
	
  test("従業員IDを取得", () => {
	  const getId = employee.getId();
	  expect(getId.equal(employeeId)).toBe(true);
  });
   test("出勤を行う", () => {
	  const specification = new PunchSpecification().getAttendance();
	  const action = new PunchTimecardFactory().createAttendance(punchDate,specification,coordinate);
	  const timecard = employee.punchAction(action);
	  
	  expect(new EntityEquivalent().employee(timecard.punchEmployee(),employee)).toBe(true);
	  expect(timecard.getCoorinate().equal(coordinate)).toBe(true);
	  expect(timecard.getPunchDate().equal(punchDate)).toBe(true);
	  expect(timecard.isAttendance()).toBe(true);
  });
  
  test("退勤を行う", () => {
	  const specification = new PunchSpecification().getLeavework();
	  const action = new PunchTimecardFactory().createLeavework(punchDate,specification,coordinate);
	  const timecard = employee.punchAction(action);
	  
	  expect(new EntityEquivalent().employee(timecard.punchEmployee(),employee)).toBe(true);
	  expect(timecard.getCoorinate().equal(coordinate)).toBe(true);
	  expect(timecard.getPunchDate().equal(punchDate)).toBe(true);
	  expect(timecard.isLeavework()).toBe(true);
  });
  
  test("休憩を開始する", () => {
	  const specification = new PunchSpecification().getTakebreak();
	  const action = new PunchTimecardFactory().createTakebreak(punchDate,specification,coordinate);
	  const timecard = employee.punchAction(action);
	  
	  expect(new EntityEquivalent().employee(timecard.punchEmployee(),employee)).toBe(true);
	  expect(timecard.getCoorinate().equal(coordinate)).toBe(true);
	  expect(timecard.getPunchDate().equal(punchDate)).toBe(true);
	  expect(timecard.isTakebreak()).toBe(true);
  });
  
  test("休憩を終了する", () => {
	  const specification = new PunchSpecification().getEndbreak();
	  const action = new PunchTimecardFactory().createEndbreak(punchDate,specification,coordinate);
	  const timecard = employee.punchAction(action);
	  
	  expect(new EntityEquivalent().employee(timecard.punchEmployee(),employee)).toBe(true);
	  expect(timecard.getCoorinate().equal(coordinate)).toBe(true);
	  expect(timecard.getPunchDate().equal(punchDate)).toBe(true);
	  expect(timecard.isTakebreak()).toBe(true);
  });
});
