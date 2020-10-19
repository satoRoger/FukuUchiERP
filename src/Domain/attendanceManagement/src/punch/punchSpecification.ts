import PunchSpecification from "./specification/punchSpecification";
import TimecardRepository from "../repository/timecard/timecardRepository";
import AttendanceSpecification from "./specification/attendanceSpecification";

export default class PunchSpecificationFactory {
  getAttendance: (repository: TimecardRepository) => PunchSpecification = (
    repository
  ) => {
    return new AttendanceSpecification(repository);
  };
  getLeavework: (repository: TimecardRepository) => PunchSpecification = (
    repository
  ) => {
    return new AttendanceSpecification(repository);
  };
  getTakebreak: (repository: TimecardRepository) => PunchSpecification = (
    repository
  ) => {
    return new AttendanceSpecification(repository);
  };
  getEndbreak: (repository: TimecardRepository) => PunchSpecification = (
    repository
  ) => {
    return new AttendanceSpecification(repository);
  };
}
