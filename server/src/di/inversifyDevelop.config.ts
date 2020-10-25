import "reflect-metadata";
import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";

const dcontainer = new Container();

dcontainer
  .bind<TimecardRepository>(DevelopTypes.TimecardRepository)
  .to(RepositoryOnMemory);

export default dcontainer;
