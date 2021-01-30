import { injectable } from "inversify";
import admin from "../../../framework/firebase/adminInitialize";
import EventRepository from "../../../domain/eventManager/src/repository/event/eventRepository";
import EventCollection from "../../../domain/eventManager/src/entity/event/eventCollection";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import { DateTime } from "luxon";
import employee from "../../../domain/eventManager/src/entity/employee/employee";
import facility from "../../../domain/eventManager/src/entity/facility/facility";
import EventId from "../../../domain/eventManager/src/valueObject/eventId";
import CollectionName from "../common/collectionName";
import FireEventsModel from "./eventsRepositoryModel/eventsModel";
import FireEventsSearch from "./eventsSearch";
import DocToDomainEvent from "./docToDomainEvent";

@injectable()
export default class EventRepositoryFS implements EventRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection(CollectionName.events);
  }
  async add(event: CalendarEvent): Promise<CalendarEvent> {
    const eventModel = new FireEventsModel(
      this.database,
      event.start,
      event.end,
      event.title.value,
      event.type,
      { userId: event.employeeId?.value, facilityId: event.facilityId?.value }
    );
    await this.repository.add(eventModel.toFirebaseStoreFormat());
    return event;
  }

  async save(event: CalendarEvent): Promise<CalendarEvent> {
    const eventModel = new FireEventsModel(
      this.database,
      event.start,
      event.end,
      event.title.value,
      event.type,
      { userId: event.employeeId?.value, facilityId: event.facilityId?.value }
    );
    await this.repository
      .doc(event.id.value)
      .set(eventModel.toFirebaseStoreFormat());

    return event;
  }

  async search(
    from?: DateTime,
    to?: DateTime,
    employee?: employee,
    facility?: facility
  ): Promise<EventCollection> {
    const queryRepository = new FireEventsSearch(this.database, {
      from: from,
      to: to,
      userId: employee?.id.value,
      facilityId: facility?.id.value,
    }).searchRepository();

    const documents = (await queryRepository.get()).docs;

    const events = documents.map((document) =>
      new DocToDomainEvent(document).toDomain()
    );

    return Promise.all(events).then((events) => {
      const collection = new EventCollection();
      for (let event of events) {
        collection.add(event);
      }
      return collection;
    });
  }

  async remove(eventId: EventId): Promise<EventId> {
    await this.repository.doc(eventId.value).delete();
    return eventId;
  }
}
