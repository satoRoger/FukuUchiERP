import TimecardRepository from "../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TestTypes from "../di/testTypes";
import container from "@/di/inversify.config";

const timecard: TimecardRepository = container.get<TimecardRepository>(
  TestTypes.TimecardRepository
);
