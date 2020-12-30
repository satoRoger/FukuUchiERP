import FacilityId from "../valueObject/facilityId";

export default class Facility {
  constructor(private _id: FacilityId) {}

  public get id() {
    return this._id;
  }
}
