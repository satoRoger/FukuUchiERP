import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventsQuery from "../InteractorObject/events/eventsQuery";
import EventAPIInterface from "../APIInterface/event/event";
import Employee from "../../../domain/eventManager/src/entity/employee/employee";
import EmployeeId from "../../../domain/eventManager/src/valueObject/employeeId";
import Facility from "../../../domain/eventManager/src/entity/facility/facility";
import FacilitiesQuery from "../InteractorObject/facilities/facilitiesQuery";
import FacilityAPIInterface from "../APIInterface/facility/facility";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";

export default async function GetFacilities(
  query: FacilitiesQuery
): Promise<FacilityAPIInterface[]> {
  const repository = container.get<FacilityRepository>(
    Types.FacilityRepository
  );
  const facilityId: FacilityId | undefined = query.id
    ? new FacilityId(query.id)
    : undefined;

  const collection = await repository.search(facilityId);

  const result: FacilityAPIInterface[] = [];

  for (let facility of collection) {
    const f: FacilityAPIInterface = {
      id: facility.id.value,
      name: facility.name?.value,
    };
    result.push(f);
  }

  return result;
}
