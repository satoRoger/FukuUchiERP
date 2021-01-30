import { DateTime } from "luxon";
import FireType from "./fireType";
export default class FireString implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private text: string
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return this.text;
  }
}
