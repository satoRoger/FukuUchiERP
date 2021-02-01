import FireTimestamp from "../common/firestoreType/fireTimestamp";
import FireUserRefference from "../common/firestoreType/fireUserRefference";
import { DateTime } from "luxon";
import CollectionName from "../common/collectionName";
import TimecardsProperty from "./usersRepositoryModel/usersProperty";
import FireFacilityRefference from "../common/firestoreType/fireFacilityRefference";
import UsersProperty from "./usersRepositoryModel/usersProperty";
import FireString from "../common/firestoreType/fireString";

type QueryRepository =
  | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
  | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default class FireUsersSearch {
  private facilityId?: FireFacilityRefference;

  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    option: {
      facilityId?: string;
    }
  ) {
    this.facilityId = option.facilityId
      ? new FireFacilityRefference(connectionDB, option.facilityId)
      : undefined;
  }
  searchRepository(): QueryRepository {
    let queryRepository: QueryRepository = this.connectionDB.collection(
      CollectionName.timecards
    );

    if (this.facilityId) {
      queryRepository = queryRepository.where(
        UsersProperty.facilityId,
        "==",
        this.facilityId.toFireStore()
      );
    }

    return queryRepository;
  }
}
