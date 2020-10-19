import "reflect-metadata";
import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import { Container } from "inversify";
import TestTypes from "./testTypes";

const tContainer = new Container();
tContainer
  .bind<TimecardRepository>(TestTypes.TimecardRepository)
  .to(RepositoryOnMemory);

export default tContainer;
