import { DateTime } from "luxon";
import CollectionName from "../collectionName";
import FireType from "./fireType";
export default class FireFacilityRefference implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private facilityId: string
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.connectionDB.collection(CollectionName.facilities).doc(this.facilityId);
  }
}
