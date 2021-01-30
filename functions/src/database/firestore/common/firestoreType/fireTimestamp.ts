import { DateTime } from "luxon";
import FireType from "./fireType";
export default class FireTimestamp implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private date: DateTime
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.date.toJSDate();
  }
}
