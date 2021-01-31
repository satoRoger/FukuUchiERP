import FireTimestamp from "../common/firestoreType/fireTimestamp";
import FireUserRefference from "../common/firestoreType/fireUserRefference";
import { DateTime } from "luxon";
import CollectionName from "../common/collectionName";
import TimecardsProperty from "./usersRepositoryModel/usersProperty";

type QueryRepository =
  | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
  | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default class FireUsersSearch {
  private from?: FireTimestamp;
  private to?: FireTimestamp;
  private userId?: FireUserRefference;

  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    option: {
      from?: DateTime;
      to?: DateTime;
      userId?: string;
    }
  ) {
    this.from = option.from
      ? new FireTimestamp(connectionDB, option.from)
      : undefined;

    this.to = option.to
      ? new FireTimestamp(connectionDB, option.to)
      : undefined;

    this.userId = option.userId
      ? new FireUserRefference(connectionDB, option.userId)
      : undefined;
  }
  searchRepository(): QueryRepository {
    let queryRepository: QueryRepository = this.connectionDB.collection(
      CollectionName.timecards
    );

    if (this.userId) {
      queryRepository = queryRepository.where(
        TimecardsProperty.userId,
        "==",
        this.userId.toFireStore()
      );
    }
    if (this.from) {
      queryRepository = queryRepository.where(
        TimecardsProperty.punchDate,
        ">=",
        this.from.toFireStore()
      );
    }
    if (this.to) {
      queryRepository = queryRepository.where(
        TimecardsProperty.punchDate,
        "<=",
        this.to.toFireStore()
      );
    }

    return queryRepository;
  }
}
