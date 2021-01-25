import DeleteFacilities from "../../interactor/src/facilities/deleteFacilities";
import GetFacilities from "../../interactor/src/facilities/getFacilities";
import PostFacilities from "../../interactor/src/facilities/postFacilities";
import PutFacilities from "../../interactor/src/facilities/putFacilities";
import FacilitiesDeleteParam from "../../interactor/src/InteractorObject/facilities/facilitiesDeleteParam";
import FacilitiesPostParam from "../../interactor/src/InteractorObject/facilities/facilitiesPostParam";
import FacilitiesPutParam from "../../interactor/src/InteractorObject/facilities/facilitiesPutParam";
import FacilitiesQuery from "../../interactor/src/InteractorObject/facilities/facilitiesQuery";

export function GetFacilitiesRouter(query: FacilitiesQuery) {
  return GetFacilities(query);
}

export function PostFacilitiesRouter(param: FacilitiesPostParam) {
  return PostFacilities(param);
}

export function PutFacilitiesRouter(param: FacilitiesPutParam) {
  return PutFacilities(param);
}

export function DeleteFacilitiesRouter(param: FacilitiesDeleteParam) {
  return DeleteFacilities(param);
}
