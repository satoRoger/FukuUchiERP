import { injectable } from "inversify";
import { DateTime } from "luxon";
import Employee from "../../../domain/attendanceManagement/src/entity/employee/employee";
import Timecard from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "../../../domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import admin from "../../../framework/firebase/adminInitialize";
import CollectionName from "../common/collectionName";
import FireTimecardsModel from "./timecardsRepositoryModel/timecardsModel";
import FireTimecardsSearch from "./timecardsSearch";
import DocToDomainTimecard from "./docToDomainTimecard";
import TimecardId from "../../../domain/attendanceManagement/src/valueObject/timecardId";

@injectable()
export default class TimecardRepositoryFS implements TimecardRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection(CollectionName.timecards);
  }
  async add(timecard: Timecard): Promise<Timecard> {
    const timecardModel = new FireTimecardsModel(
      this.database,
      timecard.punchDate,
      timecard.cardtype,
      timecard.punchEmployeeId.value,
      {
        latitude: timecard.coordinate?.latitude(),
        longitude: timecard.coordinate?.longitude(),
      }
    );
    const newTimecard = await this.repository.add(
      timecardModel.toFirebaseStoreFormat()
    );

    timecard.id = new TimecardId(newTimecard.id);
    return timecard;
  }

  async save(timecard: Timecard): Promise<Timecard> {
    const timecardModel = new FireTimecardsModel(
      this.database,
      timecard.punchDate,
      timecard.cardtype,
      timecard.punchEmployeeId.value,
      {
        latitude: timecard.coordinate?.latitude(),
        longitude: timecard.coordinate?.longitude(),
      }
    );
    await this.repository
      .doc(timecard.id.value)
      .set(timecardModel.toFirebaseStoreFormat());
    return timecard;
  }

  async search(
    employee?: Employee,
    from?: DateTime,
    to?: DateTime
  ): Promise<TimecardCollection> {
    const queryRepository = new FireTimecardsSearch(this.database, {
      from: from,
      to: to,
      userId: employee?.id.value,
    }).searchRepository();

    const documents = (await queryRepository.get()).docs;

    const timecards = documents.map(async (document) =>
      new DocToDomainTimecard(document).toDomain()
    );

    return Promise.all(timecards).then((timecards) => {
      const collection = new TimecardCollection();
      for (let timecard of timecards) {
        collection.add(timecard);
      }
      return collection;
    });
  }
}
