import RepositoryOnMemory from "@/adapter/repository/repositoryOnMemory";
import TimecardRepository from "@/domain/attendanceManagement/repository/timecard/timecardRepository";
import { Container } from "inversify";
import "reflect-metadata";
import SearchTimecard from "../usecase/timecard/searchTimecard";
import Types from "./types";

export default function DiOnDevelop(): Container {
  const container = new Container();
  container
    .bind<TimecardRepository>(Types.TimecardRepository)
    .to(RepositoryOnMemory);
  container.bind<SearchTimecard>(Types.SearchTimecard).to(SearchTimecard);

  return container;
}
