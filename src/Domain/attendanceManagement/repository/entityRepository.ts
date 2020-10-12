import TimecardRepository from "./timecard/timecardRepository";
import TimecardRepositoryFactory from "./timecard/timecardRepositoryFactory";

export default class EntityRepository {
  getTimecardRepository: () => TimecardRepository = () => {
    return new TimecardRepositoryFactory().create();
  };
}
