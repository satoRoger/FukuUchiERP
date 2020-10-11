import "reflect-metadata";
import Employee from "../../employee/employee";
import { EmployeeId, Coordinate, CardType } from "../../timecard/valueObjects";
import TimecardRepository from "../../timecard/timecardRepository";
import TestTypes from "../../../../di/testTypes";
import { TimecardDtoBuilder } from "../../dto/dataStructure/timecardDto";
import container from "@/di/inversify.config";

describe("employee", (): void => {
  test("EmployeIdが正しく取得できるか", () => {
    const employeeId = "test01";
    const employee = new Employee(new EmployeeId(employeeId));
    expect(employee.getId()).toBe(employeeId);
  });

  test("正しく出勤できるか:座標付き", () => {
    const employeeId = "test01";
    const punchDate = new Date(2020, 10, 2, 11, 12, 13);
    const coordinate = new Coordinate(10.5, 12.5);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );
    return employee
      .attendance(punchDate, repository, coordinate)
      .then((timecard) => {
        expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
        expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
        expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
        expect(timecard.isAttendance()).toBe(true);

        const builder = new TimecardDtoBuilder();
        builder.setEmployeeId(employeeId);
        builder.setCardType(CardType.Attendance);
        builder.setCoordinate(coordinate);
        builder.setPunchDate(punchDate);

        const dto = builder.build();
        expect(timecard.toDTO().equal(dto)).toBe(true);
      });
  });
  test("正しく出勤できるか:座標無し", () => {
    const employeeId = "test01";
    const punchDate = new Date(2020, 10, 2, 11, 12, 13);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );
    return employee
      .attendance(punchDate, repository, undefined)
      .then((timecard) => {
        expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
        expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
        expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
        expect(timecard.isAttendance()).toBe(true);

        const builder = new TimecardDtoBuilder();
        builder.setEmployeeId(employeeId);
        builder.setCardType(CardType.Attendance);
        builder.setPunchDate(punchDate);

        const dto = builder.build();
        expect(timecard.toDTO().equal(dto)).toBe(true);
      });
  });

  test("正しく退勤できるか:座標付き", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const leaveWorkPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const coordinate = new Coordinate(10.5, 12.5);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, coordinate)
      .then(() => {
        employee
          .leaveWork(leaveWorkPunchDate, repository, coordinate)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isLeaveWork()).toBe(true);

            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.LeaveWork);
            builder.setCoordinate(coordinate);
            builder.setPunchDate(leaveWorkPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });
  test("正しく退勤できるか:座標無し", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const leaveWorkPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, undefined)
      .then(() => {
        employee
          .leaveWork(leaveWorkPunchDate, repository, undefined)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isLeaveWork()).toBe(true);

            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.LeaveWork);
            builder.setPunchDate(leaveWorkPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });

  test("正しく休憩の開始をできるか:座標付き", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const takeBreakPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const coordinate = new Coordinate(10.5, 12.5);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, coordinate)
      .then(() => {
        employee
          .takeBreak(takeBreakPunchDate, repository, coordinate)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isTakeBreak()).toBe(true);

            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.TakeBreak);
            builder.setCoordinate(coordinate);
            builder.setPunchDate(takeBreakPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });

  test("正しく休憩の開始をできるか:座標無し", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const takeBreakPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, undefined)
      .then(() => {
        employee
          .takeBreak(takeBreakPunchDate, repository, undefined)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isTakeBreak()).toBe(true);

            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.TakeBreak);
            builder.setPunchDate(takeBreakPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });
  test("正しく休憩の終了をできるか:座標付き", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const endBreakPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const coordinate = new Coordinate(10.5, 12.5);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, coordinate)
      .then(() => {
        employee
          .endBreak(endBreakPunchDate, repository, coordinate)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isEndBreak()).toBe(true);

            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.EndBreak);
            builder.setCoordinate(coordinate);
            builder.setPunchDate(endBreakPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });
  test("正しく休憩の終了をできるか:座標なし", () => {
    const employeeId = "test01";
    const attendancePunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const endBreakPunchDate = new Date(2020, 10, 2, 11, 12, 13);
    const employee = new Employee(new EmployeeId(employeeId));

    const repository = container.get<TimecardRepository>(
      TestTypes.TimecardRepository
    );

    return employee
      .attendance(attendancePunchDate, repository, undefined)
      .then(() => {
        employee
          .endBreak(endBreakPunchDate, repository, undefined)
          .then((timecard) => {
            expect(timecard.punchEmployee().getId().id()).toBe(employeeId);
            expect(timecard.isPunchedAfter(new Date(2020, 10, 1))).toBe(true);
            expect(timecard.isPunchedBefore(new Date(2020, 10, 3))).toBe(true);
            expect(timecard.isEndBreak()).toBe(true);
            
            const builder = new TimecardDtoBuilder();
            builder.setEmployeeId(employeeId);
            builder.setCardType(CardType.EndBreak);
            builder.setPunchDate(endBreakPunchDate);

            const dto = builder.build();
            expect(timecard.toDTO().equal(dto)).toBe(true);
          });
      });
  });
});
