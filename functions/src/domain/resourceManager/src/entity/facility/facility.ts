import FacilityId from "../../valueObject/facilityId";
export default class Facility {
  constructor(private _id: FacilityId) {}

  public get id(): FacilityId {
    return this._id;
  }
  public set id(value: FacilityId) {
    this._id = value;
  }
}
