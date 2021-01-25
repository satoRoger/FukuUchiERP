import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import FacilityFactory from "../../../domain/resourceManager/src/entity/facility/facilityFactory";
import FacilitiesPostParam from "../InteractorObject/facilities/facilitiesPostParam";
import FacilityAPIInterface from "../APIInterface/facility/facility";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";
import FacilitiesPutParam from "../InteractorObject/facilities/facilitiesPutParam";

export default async function PutFacilities(
  param: FacilitiesPutParam
): Promise<FacilityAPIInterface[]> {
  const repository = container.get<FacilityRepository>(
    Types.FacilityRepository
  );

  const newData = await repository.save(
    new FacilityFactory().create(param.id ,param.name)
  );

  const response: FacilityAPIInterface = {
    id: newData.id.value,
    name: newData.name.value,
  };
  const result: FacilityAPIInterface[] = [response];
  return result;
}
