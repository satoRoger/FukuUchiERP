import "reflect-metadata";
//import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";
import TimecardsResponseInterface from "../../interactor/InteractorObject/timecards/timecardsResponse";
import TimecardsResponse from "../../controller/contollerObject/timecardResponse";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardRepositoryFS from "../../database/firestore/timecardRepository/timecardRepositoryFS";
import UsersResponseInterface from "../../interactor/InteractorObject/users/usersResponse";
import UsersResponse from "../../controller/contollerObject/usersResponse";
import PersonRepository from "../../domain/resourceManager/src/repository/personRepostitory";
import UsersRepositoryFS from "../../database/firestore/usersRepository/usersRepostitoryFS";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsRepositoryFS from "../../database/firestore/workflowsRepository/workflowsRepository";
import WorkflowsResponseInterface from "../../interactor/InteractorObject/workflows/workflowsResponse";
import WorkflowsResponse from "../../controller/contollerObject/workflowsResponse";

const dcontainer = new Container();
dcontainer
  .bind<TimecardsResponseInterface>(DevelopTypes.TimecardsResponse)
  .to(TimecardsResponse);
dcontainer
  .bind<TimecardRepository>(DevelopTypes.TimecardRepository)
  .to(TimecardRepositoryFS);

dcontainer
  .bind<UsersResponseInterface>(DevelopTypes.UsersResponse)
  .to(UsersResponse);
dcontainer
  .bind<PersonRepository>(DevelopTypes.PersonRepository)
  .to(UsersRepositoryFS);

dcontainer
  .bind<WorkflowRepository>(DevelopTypes.WorkflowsRepository)
  .to(WorkflowsRepositoryFS);
dcontainer
  .bind<WorkflowsResponseInterface>(DevelopTypes.WorkflowsResponse)
  .to(WorkflowsResponse);

export default dcontainer;
