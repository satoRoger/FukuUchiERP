import TimecardRepository from "./timecardRepository";
import Types from "../../../../di/types";
import { inject } from "inversify";
import "reflect-metadata";

export default class TimecardRepositoryFactory {
  @inject(Types.TimecardRepository)
  private repository: TimecardRepository;

  create: () => TimecardRepository = () => {
    return this.repository;
  };
}
