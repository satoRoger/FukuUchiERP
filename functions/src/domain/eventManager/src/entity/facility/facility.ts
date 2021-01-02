import FacilityName from "../../../../resourceManager/src/valueObject/facilityName";
import FacilityId from "../../valueObject/facilityId";

export default class Facility {
  constructor(private _id: FacilityId) {}

  public get id() {
    return this._id;
  }

}
