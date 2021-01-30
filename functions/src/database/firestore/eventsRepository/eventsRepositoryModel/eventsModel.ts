import FireTimestamp from "../../common/firestoreType/fireTimestamp";
import FireFacilityRefference from "../../common/firestoreType/fireFacilityRefference";
import FireString from "../../common/firestoreType/fireString";
import FireUserRefference from "../../common/firestoreType/fireUserRefference";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
import { DateTime } from "luxon";
import FireNull from "../../common/firestoreType/fireNull";
import EventsProperty from "./eventsProperty";
export default class FireEventsModel {
  private start: FireTimestamp;
  private end: FireTimestamp;
  private title: FireString;
  private type: FireString;
  private userId: FireUserRefference | FireNull;
  private facilityId: FireFacilityRefference | FireNull;
  constructor(
    connectionDB: FirebaseFirestore.Firestore,
    start: DateTime,
    end: DateTime,
    title: string,
    type: EventType,
    option: { userId?: string; facilityId?: string }
  ) {
    this.start = new FireTimestamp(connectionDB, start);
    this.end = new FireTimestamp(connectionDB, end);
    this.title = new FireString(connectionDB, title);
    this.type = new FireString(connectionDB, type);
    this.userId = option.userId
      ? new FireUserRefference(connectionDB, option.userId)
      : new FireNull();
    this.facilityId = option.facilityId
      ? new FireFacilityRefference(connectionDB, option.facilityId)
      : new FireNull();
  }
  toFirebaseStoreFormat(): FirebaseFirestore.DocumentData {
    return {
      [EventsProperty.start]: this.start.toFireStore(),
      [EventsProperty.end]: this.end.toFireStore(),
      [EventsProperty.title]: this.title.toFireStore(),
      [EventsProperty.type]: this.type.toFireStore(),
      [EventsProperty.userId]: this.userId.toFireStore(),
      [EventsProperty.facilityId]: this.facilityId.toFireStore(),
    };
  }
}
