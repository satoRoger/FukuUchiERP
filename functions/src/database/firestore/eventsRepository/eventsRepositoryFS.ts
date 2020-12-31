import { injectable } from "inversify";
import admin from "../../../framework/firebase/adminInitialize";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventCollection from "../../../domain/eventManager/src/entity/event/eventCollection";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import { DateTime } from "luxon";
import employee from "../../../domain/eventManager/src/entity/employee/employee";
import facility from "../../../domain/eventManager/src/entity/facility";
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
      queryRepository = queryRepository.where("facilityId", "==", facilityRef);
    }
    if (from) {
      queryRepository = queryRepository.where(
        "punchDate",
        ">=",
        from.toJSDate()
      );
    }
    if (to) {
      queryRepository = queryRepository.where("punchDate", "<=", to.toJSDate());
    }
    const snapshot = await queryRepository.get();

    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();

      const userDoc = data.userId ? await data.userId.get() : undefined;

      const facilityDoc = data.facilityId
        ? await data.facilityId.get()
        : undefined;

      return new EventFactory().create(
        doc.id,
        data.type,
        DateTime.fromJSDate(data.start.toDate()),
        DateTime.fromJSDate(data.end.toDate()),
        data.title,
        userDoc.id,
        facilityDoc.id
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
