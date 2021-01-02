import { DateTime } from "luxon";
import Facility from "../entity/facility/facility";
import FacilityCollection from "../entity/facility/facilityCollection";
import FacilityId from "../valueObject/facilityId";

export default interface FacilityRepository {
  save(facility: Facility): Promise<Facility>;
  search(facilityId?: FacilityId): Promise<FacilityCollection>;
}
