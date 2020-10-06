namespace attendance {
  export const enum CardType {
    Attendance = "attendance",
    LeaveWork = "leaveWork",
    TakeBreak = "takeBreak",
    EndBreak = "endBreak",
  }
  export type Coordinate = {
    readonly latitude: number;
    readonly longitude: number;
  };

  export interface Timecard {
    readonly employee: Employee;
    readonly cardType: CardType;
    readonly punchDate: Date;
    readonly coodinate: Coordinate;

    isPunchedAfter: (date: Date) => boolean;
    isPunchedBefore: (date: Date) => boolean;
  }

  export interface TimecardFactory {
    create: () => Timecard;
  }

  export interface TimecardDTO {
    readonly attendanceDate?: Date;
    readonly leaveWorkDate?: Date;
    readonly takeBreakDate?: Date;
    readonly endBreakDate?: Date;
    readonly attendanceCoodinate?: attendance.Coordinate;
    readonly leaveWorkCoordinate?: attendance.Coordinate;
    readonly takeBreakCoordinate?: attendance.Coordinate;
    readonly endBreakCoordinate?: attendance.Coordinate;
  }

  export interface TimecardSearchResult {
    readonly employeeId: string;
    readonly searchResult: Array<TimecardDTO>;
  }

  export interface TimecardRepository {
    save: (timecard: Timecard) => Promise<common.Result>;
    findAll: (employee: Employee) => Promise<TimecardSearchResult>;
    findWithDuration: (
      employee: Employee,
      from: Date,
      to: Date
    ) => Promise<TimecardSearchResult>;
  }
}
