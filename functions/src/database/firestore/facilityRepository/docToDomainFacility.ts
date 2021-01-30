import { DateTime } from "luxon";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";
import FacilitiesProperty from "./facilitiesRepositoryModel/facilitiesProperty";
import FacilityFactory from "../../../domain/resourceManager/src/entity/facility/facilityFactory";
import Facility from '../../../domain/resourceManager/src/entity/facility/facility';

export default class DocToDomainFacility {
  constructor(
    private document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
  ) {}

  async toDomain(): Promise<Facility> {
    const id = this.document.id;
    const name = this.document.get(FacilitiesProperty.name);

    return new FacilityFactory().create(id, name);
  }
}
