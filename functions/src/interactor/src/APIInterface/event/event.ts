import { DateTime } from "luxon";
import EventType from "../../../../domain/eventManager/src/valueObject/eventType";
export default interface EventAPIInterface {
  id: string;
  start: DateTime;
  end: DateTime;
  title: string;
  type: EventType;
  userId?: string;
  facilityIds?: string[];
}
