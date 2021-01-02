import { DateTime } from "luxon";
export default interface EventAPIInterface {
  id: string;
  start: DateTime;
  end: DateTime;
  title: string;
  type: string;
  userId?: string;
  facilityIds?: string[];
}
