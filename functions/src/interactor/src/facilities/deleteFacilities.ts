import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import FacilityFactory from "../../../domain/resourceManager/src/entity/facility/facilityFactory";
import FacilitiesPostParam from "../InteractorObject/facilities/facilitiesPostParam";
import FacilityAPIInterface from "../APIInterface/facility/facility";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";
import FacilitiesDeleteParam from "../InteractorObject/facilities/facilitiesDeleteParam";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";

export default async function DeleteFacilities(
  param: FacilitiesDeleteParam
): Promise<string> {
  const repository = container.get<FacilityRepository>(
    Types.FacilityRepository
  );

  const facilityId = new FacilityId(param.id);
  const id = await repository.remove(facilityId);

  return id.value;
}
