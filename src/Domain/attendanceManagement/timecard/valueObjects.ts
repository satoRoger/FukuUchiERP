export const enum CardType {
  Attendance = "attendance",
  LeaveWork = "leaveWork",
  TakeBreak = "takeBreak",
  EndBreak = "endBreak",
}

export class Coordinate {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public getLatitude() {
    return this.latitude;
  }

  public getLongitude() {
    return this.longitude;
  }
}

export class TimecardId {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export class EmployeeId {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }
}
