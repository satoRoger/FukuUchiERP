import { errorMessageList } from "../common/message";

export default class Coordinate {
  private latitudeValue: number;
  private longitudeValue: number;

  constructor(latitude: number, longitude: number) {
    if (
      !(-90 <= latitude && latitude <= 90) ||
      !(-180 <= longitude && longitude <= 180)
    ) {
      throw Error(errorMessageList.RangeOfValueIsInvalid);
    }
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
