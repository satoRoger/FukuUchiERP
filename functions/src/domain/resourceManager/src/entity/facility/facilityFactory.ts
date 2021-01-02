import FacilityId from "../../valueObject/facilityId";
import FacilityName from "../../valueObject/facilityName";
import Facility from "./facility";

export default class FacilityFactory {
  public create(id: string, name?: string): Facility {
    const facilityName = name ? new FacilityName(name) : undefined;
    return new Facility(new FacilityId(id), facilityName);
  }
}
