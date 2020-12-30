import "reflect-metadata";
//import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardRepositoryFS from "../../database/firestore/timecardRepository/timecardRepositoryFS";
import UsersResponseInterface from "../../interactor/src/InteractorObject/users/usersResponse";
import UsersResponse from "../../controller/contollerObject/usersResponse";
import PersonRepository from "../../domain/resourceManager/src/repository/personRepostitory";
import UsersRepositoryFS from "../../database/firestore/usersRepository/usersRepostitoryFS";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsRepositoryFS from "../../database/firestore/workflowsRepository/workflowsRepository";
import WorkflowsResponseInterface from "../../interactor/src/InteractorObject/workflows/workflowsResponse";
import WorkflowsResponse from "../../controller/contollerObject/workflowsResponse";
import EventRepository from '../../domain/eventManager/src/repository/event/eventRepository';
import EventRepositoryFS from '../../database/firestore/eventsRepository/eventsRepositoryFS';

const dcontainer = new Container();
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
  .bind<WorkflowRepository>(DevelopTypes.WorkflowRepository)
  .to(WorkflowsRepositoryFS);
dcontainer
  .bind<WorkflowsResponseInterface>(DevelopTypes.WorkflowsResponse)
  .to(WorkflowsResponse);

dcontainer
  .bind<EventRepository>(DevelopTypes.EventRepository)
  .to(EventRepositoryFS);


export default dcontainer;
