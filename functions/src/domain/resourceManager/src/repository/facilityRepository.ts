import Facility from "../entity/facility/facility";
import FacilityCollection from "../entity/facility/facilityCollection";
import FacilityId from "../valueObject/facilityId";

export default interface FacilityRepository {
  add(facility: Facility): Promise<Facility>;
  save(facility: Facility): Promise<Facility>;
  search(facilityId?: FacilityId): Promise<FacilityCollection>;
  remove(facilityId: FacilityId): Promise<FacilityId>;
}
