import { errorMessageList } from "../../../common/message";
export const CardType = {
  Attendance: "attendance",
  LeaveWork: "leaveWork",
  TakeBreak: "takeBreak",
  EndBreak: "endBreak",
} as const;
export type CardType = typeof CardType[keyof typeof CardType];

export class Coordinate {
  private latitudeValue: number;
  private longitudeValue: number;

  constructor(latitude: number, longitude: number) {
    this.latitudeValue = latitude;
    this.longitudeValue = longitude;
  }

  latitude: () => number = () => {
    return this.latitudeValue;
  };

  longitude: () => number = () => {
    return this.longitudeValue;
  };

  coordinate: () => { latitude: number; longitude: number } = () => {
    return { latitude: this.latitudeValue, longitude: this.longitudeValue };
  };

  equal: (coordinate: Coordinate) => boolean = (coordinate) => {
    return (
      this.latitudeValue === coordinate.latitude() &&
      this.longitudeValue === coordinate.longitude()
    );
  };
}

export class TimecardId {
  private value: string;

  constructor(id: string) {
    this.value = id;
  }
  id: () => string = () => {
    return this.value;
  };
}

export class EmployeeId {
  private value: string;

  constructor(id: string) {
    if (id.length === 0) {
      throw new Error(errorMessageList.LengthZeroIdIsProhivited);
    }
    this.value = id;
  }

  id: () => string = () => {
    return this.value;
  };
}
