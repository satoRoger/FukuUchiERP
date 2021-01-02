import "reflect-metadata";
//import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardRepositoryFS from "../../database/firestore/timecardRepository/timecardRepositoryFS";
import PersonRepository from "../../domain/resourceManager/src/repository/personRepostitory";
import UsersRepositoryFS from "../../database/firestore/usersRepository/usersRepostitoryFS";
import WorkflowRepository from "../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsRepositoryFS from "../../database/firestore/workflowsRepository/workflowsRepositoryFS";
import EventRepository from "../../domain/eventManager/src/repository/event/eventRepository";
import EventRepositoryFS from "../../database/firestore/eventsRepository/eventsRepositoryFS";
import FacilityRepositoryFS from "../../database/firestore/facilityRepository/facilityRepositoryFS";
import FacilityRepository from "../../domain/resourceManager/src/repository/facilityRepository";

const dcontainer = new Container();
dcontainer
  .bind<TimecardRepository>(DevelopTypes.TimecardRepository)
  .to(TimecardRepositoryFS);

dcontainer
  .bind<PersonRepository>(DevelopTypes.PersonRepository)
  .to(UsersRepositoryFS);

dcontainer
  .bind<WorkflowRepository>(DevelopTypes.WorkflowRepository)
  .to(WorkflowsRepositoryFS);

dcontainer
  .bind<EventRepository>(DevelopTypes.EventRepository)
  .to(EventRepositoryFS);

dcontainer
  .bind<FacilityRepository>(DevelopTypes.FacilityRepository)
  .to(FacilityRepositoryFS);

export default dcontainer;
