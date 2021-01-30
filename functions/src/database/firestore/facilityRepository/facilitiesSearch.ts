import FireTimestamp from "../common/firestoreType/fireTimestamp";
import FireFacilityRefference from "../common/firestoreType/fireFacilityRefference";
import FireString from "../common/firestoreType/fireString";
import FireUserRefference from "../common/firestoreType/fireUserRefference";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import { DateTime } from "luxon";
import FireNull from "../common/firestoreType/fireNull";
import CollectionName from "../common/collectionName";

type QueryRepository =
  | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
  | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default class FireFacilitiesSearch {
  constructor(private connectionDB: FirebaseFirestore.Firestore) {}

  searchRepository(): QueryRepository {
    let queryRepository: QueryRepository = this.connectionDB.collection(
      CollectionName.facilities
    );

    return queryRepository;
  }
}
