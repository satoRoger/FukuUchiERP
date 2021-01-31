import { DateTime } from "luxon";
import FireType from "./fireType";
export default class FireArray implements FireType {
  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    private array: any[]
  ) {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | any[]
    | null {
    return this.array;
  }
}
