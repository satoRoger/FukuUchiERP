import { DateTime } from "luxon";
import CalendarEvent from "../../../domain/eventManager/src/entity/event/event";
import EventFactory from "../../../domain/eventManager/src/entity/event/eventFactory";
import EventsProperty from "./usersRepositoryModel/usersProperty";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/timecard";
import TimecardFactory from "../../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import TimecardsProperty from "./usersRepositoryModel/usersProperty";
import TimecardId from "../../../domain/attendanceManagement/src/valueObject/timecardId";
import EmployeeId from "../../../domain/attendanceManagement/src/valueObject/employeeId";
export default class DocToDomainTimecard {
  constructor(
    private document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
  ) {}

  async toDomain(): Promise<Timecard> {
    const id = this.document.id;
    const cardType = this.document.get(TimecardsProperty.cardType);
    const punchDate = this.document.get(TimecardsProperty.punchDate);
    const userRef = this.document.get(EventsProperty.userId);
    const latitude = this.document.get(TimecardsProperty.latitude);
    const longitude = this.document.get(TimecardsProperty.longitude);

    let userDoc;
    if (userRef) {
      userDoc = await userRef.get();
    }

    return new TimecardFactory().createTimecard(
      new TimecardId(id),
      new EmployeeId(userDoc.id),
      cardType,
      DateTime.fromJSDate(punchDate.toDate()),
      latitude,
      longitude
    );
  }
}
