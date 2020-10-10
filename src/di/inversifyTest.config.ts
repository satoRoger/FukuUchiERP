import { Container } from "inversify";
import "reflect-metadata";
import TimecardRepository from "../domain/attendanceManagement/timecard/timecardRepository";
import RepositoryOnMemory from "../adapter/repository/repositoryOnMemory";
import TestTypes from "./testTypes";

export default function DiOnTest(): Container {
  const container = new Container();
  container
    .bind<TimecardRepository>(TestTypes.TimecardRepository)
    .to(RepositoryOnMemory);

    

  return container;
}
