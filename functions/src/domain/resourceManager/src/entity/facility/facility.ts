import FacilityId from "../../valueObject/facilityId";
import FacilityName from "../../valueObject/facilityName";

export default class Facility {
  constructor(private _id: FacilityId, private _name: FacilityName) {}

  public get id(): FacilityId {
    return this._id;
  }
  public get name() {
    return this._name;
  }
}
