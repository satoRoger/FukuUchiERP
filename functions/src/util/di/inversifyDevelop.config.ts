import "reflect-metadata";
//import RepositoryOnMemory from "@/adapter/src/repository/repositoryOnMemory/repositoryOnMemory";
import { Container } from "inversify";
import DevelopTypes from "./developTypes";
import TimecardsResponseInterface from "../../interactor/InteractorObject/timecardsResponse";
import TimecardsResponse from "../../controller/contollerObject/timecardResponse";

const dcontainer = new Container();
dcontainer
  .bind<TimecardsResponseInterface>(DevelopTypes.TimecardsResponse)
  .to(TimecardsResponse);
export default dcontainer;
