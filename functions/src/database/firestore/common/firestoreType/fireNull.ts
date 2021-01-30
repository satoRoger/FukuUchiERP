import FireType from "./fireType";
export default class FireNull implements FireType {
  constructor() {}

  toFireStore():
    | string
    | number
    | Date
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
    | null {
    return null;
  }
}
