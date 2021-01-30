import { DateTime } from "luxon";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";
import EventsProperty from "./eventsRepositoryModel/eventsProperty";
export default class DocToDomainEvent {
  constructor(
    private document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
  ) {}

  async toDomain(): Promise<CalendarEvent> {
    const id = this.document.id;
    const start = this.document.get(EventsProperty.start);
    const end = this.document.get(EventsProperty.end);
    const title = this.document.get(EventsProperty.title);
    const type = this.document.get(EventsProperty.type);

    const userRef = this.document.get(EventsProperty.userId);
    const facilityRef = this.document.get(EventsProperty.facilityId);

    let userDoc;
    let facilityDoc;
    if (userRef) {
      userDoc = await userRef.get();
    }
    if (facilityRef) {
      facilityDoc = await facilityRef.get();
    }

    return new EventFactory().create(
      id,
      type,
      DateTime.fromJSDate(start.toDate()),
      DateTime.fromJSDate(end.toDate()),
      title,
      userDoc ? userDoc.id : undefined,
      facilityDoc ? facilityDoc.id : undefined
    );
  }
}
