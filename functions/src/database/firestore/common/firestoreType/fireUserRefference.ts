import { DateTime } from "luxon";
import CollectionName from "../collectionName";
import FireType from "./fireType";
export default class FireUserRefference implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private userId: string
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.connectionDB
      .collection(CollectionName.users)
      .doc(this.userId);
  }
}
