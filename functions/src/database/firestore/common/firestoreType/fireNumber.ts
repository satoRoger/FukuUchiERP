import { DateTime } from "luxon";
import FireType from "./fireType";
export default class FireNumber implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private number: number
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.number;
  }
}
