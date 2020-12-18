import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import UsersPostParam from "../../../interactor/InteractorObject/users/usersPostParam";

export default class ValidateUsersPostParam {
  constructor(
    private userId?: string,
    private cardType?: CardType,
    private punchDate?: DateTime,
    private longitude?: number,
    private latitude?: number
  ) {}

  createWithValid(): UsersPostParam | undefined {
    if (this.userId && this.cardType && this.punchDate) {
      return new UsersPostParam(
        this.userId,
        this.cardType,
        this.punchDate,
        this.latitude,
        this.longitude
      );
    } else {
      return undefined;
    }
  }
}
