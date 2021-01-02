import GetFacilities from "../../interactor/src/facilities/getFacilities";
import FacilitiesPostParam from "../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
import FacilitiesQuery from "../../interactor/src/InteractorObject/facilities/facilitiesQuery";

export function GetFacilitiesRouter(query: FacilitiesQuery) {
  return GetFacilities(query);
}

export function PostFacilitiesRouter(param: FacilitiesPostParam) {
  return PostFacilities(param);
}
