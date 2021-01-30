import FireString from "../../common/firestoreType/fireString";
import FacilitiesProperty from "./facilitiesProperty";

export default class FireFacilitiesModel {
  private name: FireString;
  constructor(connectionDB: FirebaseFirestore.Firestore, name: string) {
    this.name = new FireString(connectionDB, name);
  }
  toFirebaseStoreFormat(): FirebaseFirestore.DocumentData {
    return {
      [FacilitiesProperty.name]: this.name.toFireStore(),
    };
  }
}
