import FireTimestamp from "../common/firestoreType/fireTimestamp";
import FireFacilityRefference from "../common/firestoreType/fireFacilityRefference";
import FireString from "../common/firestoreType/fireString";
import FireUserRefference from "../common/firestoreType/fireUserRefference";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import { DateTime } from "luxon";
import FireNull from "../common/firestoreType/fireNull";
import CollectionName from "../common/collectionName";
import EventsProperty from "./eventsRepositoryModel/eventsProperty";

type QueryRepository =
  | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
  | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default class FireEventsSearch {
  private from?: FireTimestamp;
  private to?: FireTimestamp;
  private userId?: FireUserRefference;
  private facilityId?: FireFacilityRefference;

  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    option: {
      from?: DateTime;
      to?: DateTime;
      userId?: string;
      facilityId?: string;
    }
  ) {
    this.from = option.from
      ? new FireTimestamp(connectionDB, option.from)
      : undefined;

    this.to = option.to
      ? new FireTimestamp(connectionDB, option.to)
      : undefined;

    this.userId = option.userId
      ? new FireUserRefference(connectionDB, option.userId)
      : undefined;

    this.facilityId = option.facilityId
      ? new FireFacilityRefference(connectionDB, option.facilityId)
      : undefined;
  }
  searchRepository(): QueryRepository {
    let queryRepository: QueryRepository = this.connectionDB.collection(
      CollectionName.events
    );

    if (this.userId) {
      queryRepository = queryRepository.where(
        EventsProperty.userId,
        "==",
        this.userId.toFireStore()
      );
    }
    if (this.facilityId) {
      queryRepository = queryRepository.where(
        EventsProperty.facilityId,
        "==",
        this.facilityId.toFireStore()
      );
    }
    if (this.from) {
      queryRepository = queryRepository.where(
        EventsProperty.start,
        ">=",
        this.from.toFireStore()
      );
    }
    if (this.to) {
      queryRepository = queryRepository.where(
        EventsProperty.start,
        "<=",
        this.to.toFireStore()
      );
    }

    return queryRepository;
  }
}
