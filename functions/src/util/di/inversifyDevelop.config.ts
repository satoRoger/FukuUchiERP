import "reflect-metadata";
//import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";
import TimecardsResponseInterface from "../../interactor/InteractorObject/timecards/timecardsResponse";
import TimecardsResponse from "../../controller/contollerObject/timecardResponse";
import TimecardRepository from "../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import TimecardRepositoryFS from '../../database/firestore/timecardRepository/timecardRepositoryFS';

const dcontainer = new Container();
dcontainer
  .bind<TimecardsResponseInterface>(DevelopTypes.TimecardsResponse)
  .to(TimecardsResponse);
dcontainer
  .bind<TimecardRepository>(DevelopTypes.TimecardRepository)
  .to(TimecardRepositoryFS);

export default dcontainer;
