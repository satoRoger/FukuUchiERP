import { injectable } from "inversify";
import admin from "../../../framework/firebase/adminInitialize";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventCollection from "../../../domain/eventManager/src/entity/event/eventCollection";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import { DateTime } from "luxon";
import employee from "../../../domain/eventManager/src/entity/employee/employee";
import facility from "../../../domain/eventManager/src/entity/facility/facility";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";

@injectable()
export default class EventRepositoryFS implements EventRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("events");
  }

  async save(event: CalendarEvent): Promise<CalendarEvent> {
    const userRef = event.employeeId
      ? this.database.collection("users").doc(event.employeeId.value)
      : null;

    const facilityRef = event.facilityId
      ? this.database.collection("facilities").doc(event.facilityId.value)
      : null;

    await this.repository.add({
      start: event.start.toJSDate(),
      end: event.end.toJSDate(),
      title: event.title.value,
      type: event.type,
      userId: userRef,
      facilityId: facilityRef,
    });
    return event;
  }
  async search(
    from?: DateTime,
    to?: DateTime,
    employee?: employee,
    facility?: facility
  ): Promise<EventCollection> {
    let queryRepository:
      | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = this
      .repository;

    if (employee) {
      const userRef = this.database.collection("users").doc(employee.id.value);
      queryRepository = queryRepository.where("userId", "==", userRef);
    }
    if (facility) {
      const facilityRef = this.database
        .collection("facilities")
        .doc(facility.id.value);
      queryRepository = queryRepository.where(
        "facilityIds",
        "array-contains",
        facilityRef
      );
    }
    if (from) {
      queryRepository = queryRepository.where("start", ">=", from.toJSDate());
    }
    if (to) {
      queryRepository = queryRepository.where("start", "<=", to.toJSDate());
    }
    const snapshot = await queryRepository.get();

    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();

      let userDoc;
      let facilityDoc;
      if (data.userId) {
        userDoc = await data.userId.get();
      }
      if (data.facilityId) {
        facilityDoc = await data.facilityId.get();
      }

      return new EventFactory().create(
        doc.id,
        data.type,
        DateTime.fromJSDate(data.start.toDate()),
        DateTime.fromJSDate(data.end.toDate()),
        data.title,
        userDoc ? userDoc.id : undefined,
        facilityDoc ? facilityDoc.id : undefined
      );
    });

    return Promise.all(result).then((events) => {
      const collection = new EventCollection();
      for (let event of events) {
        collection.add(event);
      }
      return collection;
    });
  }
}
