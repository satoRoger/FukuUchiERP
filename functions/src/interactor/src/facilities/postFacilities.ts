import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import FacilityFactory from "../../../domain/resourceManager/src/entity/facility/facilityFactory";
import FacilitiesPostParam from "../InteractorObject/facilities/facilitiesPostParam";
import FacilityAPIInterface from "../APIInterface/facility/facility";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";

export default async function PostFacilities(
  param: FacilitiesPostParam
): Promise<FacilityAPIInterface[]> {
  const repository = container.get<FacilityRepository>(
    Types.FacilityRepository
  );

  const newData = await repository.add(
    new FacilityFactory().create("", param.name)
  );

  const response: FacilityAPIInterface = {
    id: newData.id.value,
    name: newData.name.value,
  };
  const result: FacilityAPIInterface[] = [response];
  return result;
}
