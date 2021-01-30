import FireTimestamp from "../../common/firestoreType/fireTimestamp";
import FireString from "../../common/firestoreType/fireString";
import FireUserRefference from "../../common/firestoreType/fireUserRefference";
import { DateTime } from "luxon";
import FireNull from "../../common/firestoreType/fireNull";
import FireNumber from "../../common/firestoreType/fireNumber";
import TimecardsProperty from "./timecardsProperty";

export default class FireTimecardsModel {
  private punchdate: FireTimestamp;
  private cardType: FireString;
  private userId: FireUserRefference;
  private latitude: FireNumber | FireNull;
  private longitude: FireNumber | FireNull;

  constructor(
    connectionDB: FirebaseFirestore.Firestore,
    punchDate: DateTime,
    cardType: string,
    userId: string,
    option: {
      latitude?: number;
      longitude?: number;
    }
  ) {
    this.punchdate = new FireTimestamp(connectionDB, punchDate);
    this.cardType = new FireString(connectionDB, cardType);
    this.userId = new FireUserRefference(connectionDB, userId);
    this.latitude = option.latitude
      ? new FireNumber(connectionDB, option.latitude)
      : new FireNull();
    this.longitude = option.longitude
      ? new FireNumber(connectionDB, option.longitude)
      : new FireNull();
  }
  toFirebaseStoreFormat(): FirebaseFirestore.DocumentData {
    return {
      [TimecardsProperty.cardType]: this.cardType.toFireStore(),
      [TimecardsProperty.latitude]: this.latitude.toFireStore(),
      [TimecardsProperty.longitude]: this.longitude.toFireStore(),
      [TimecardsProperty.punchDate]: this.punchdate.toFireStore(),
      [TimecardsProperty.userId]: this.userId.toFireStore(),
    };
  }
}
