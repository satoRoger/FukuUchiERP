namespace attendance {
  interface EmployeeId {
    readonly id: string;
  }

  export interface Employee {
    readonly id: EmployeeId;

    attendance: (
      punchDate: Date,
      coordinate: Coordinate
    ) => Promise<common.Result>;

    leaveWork: (
      punchDate: Date,
      coordinate: Coordinate
    ) => Promise<common.Result>;

    takeBreak: (
      punchDate: Date,
      coordinate: Coordinate
    ) => Promise<common.Result>;

    endBreak: (
      punchDate: Date,
      coordinate: Coordinate
    ) => Promise<common.Result>;
  }

  export interface EmployeeFactory {
    create: () => Employee;
  }
}
