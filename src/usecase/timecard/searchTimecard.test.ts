import TimecardCollection from "../../domain/attendanceManagement/src/entity/timecard/timecardCollection";
import UserId from "../../domain/common/src/valueObject/userid";
export default class SearchTimecard {
  searchAttendance: (
    viewUserId: UserId,
    timecardUser: UserId,
    fromDate?: Date,
    toDate?: Date
  ) => TimecardCollection = () => {
    return new TimecardCollection();
  };
}
