import CoordinateAPIInterface from "./coordinate";
import CardType from "../../../../domain/attendanceManagement/src/valueObject/cardtype";

export default interface TimecardAPIInterface {
  id: string;
  cardType: CardType;
  userId: string;
  date: string;
  coordinate?: CoordinateAPIInterface;
}
