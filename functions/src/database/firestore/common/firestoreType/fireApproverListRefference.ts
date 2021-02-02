import { DateTime } from "luxon";
import CollectionName from "../collectionName";
import FireType from "./fireType";
export default class FireApproverListRefference implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private approverListId: string
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.connectionDB.collection(CollectionName.approverList).doc(this.approverListId);
  }
}
