import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import TimecardRepository from "@/domain/attendanceManagement/src/repository/timecard/timecardRepository";
import SearchTimecard from "@/usecase/timecard/searchTimecard.test";
import { Container } from "inversify";
import Types from "./types";


export default function DiOnDevelop(): Container {
  const container = new Container();
  container
    .bind<TimecardRepository>(Types.TimecardRepository)
    .to(RepositoryOnMemory);
  container.bind<SearchTimecard>(Types.SearchTimecard).to(SearchTimecard);

  return container;
}
