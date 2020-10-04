import Latitude from "./Latitude";
import Longitude from "./Longitude";

export default class Coordinate {
  private latitude: Latitude;
  private longitude: Longitude;

  constructor(latitude: Latitude, longitude: Longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
