import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import { Container } from "inversify";
import "reflect-metadata";
import RepositoryOnMemory from "../adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import TestTypes from "./testTypes";

export default function DiOnTest(): Container {
  const container = new Container();
  container
    .bind<TimecardRepository>(TestTypes.TimecardRepository)
    .to(RepositoryOnMemory);
  return container;
}
