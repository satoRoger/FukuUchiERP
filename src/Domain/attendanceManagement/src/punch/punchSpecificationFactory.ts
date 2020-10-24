import PunchSpecification from "./specification/punchSpecification";
import TimecardRepository from "../repository/timecard/timecardRepository";
import AttendanceSpecification from "./specification/attendanceSpecification";
import LeaveworkSpecification from "./specification/leaveworkSpecification";
import logger from "@/util/logger/logger";

export default class PunchSpecificationFactory {
  @logger.debug.traceMethodCall
  getAttendance(repository: TimecardRepository): PunchSpecification {
    return new AttendanceSpecification(repository);
  }

  @logger.debug.traceMethodCall
  getLeavework(repository: TimecardRepository): PunchSpecification {
    return new LeaveworkSpecification(repository);
  }

  @logger.debug.traceMethodCall
  getTakebreak(repository: TimecardRepository): PunchSpecification {
    return new AttendanceSpecification(repository);
  }

  @logger.debug.traceMethodCall
  getEndbreak(repository: TimecardRepository): PunchSpecification {
    return new AttendanceSpecification(repository);
  }
}
