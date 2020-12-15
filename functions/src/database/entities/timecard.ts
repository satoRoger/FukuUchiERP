import CardType from "../../domain/attendanceManagement/src/valueObject/cardtype";

export default class Timecard {
  public id?: string;
  public date: string;
  public cardType: CardType;
  public userId: string;
  public longitude?: number;
  public latitude?: number;

  constructor(
    date: string,
    cardType: CardType,
    userId: string,
    longitude?: number,
    latitude?: number
  ) {
    this.date = date;
    this.cardType = cardType;
    this.userId = userId;
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
