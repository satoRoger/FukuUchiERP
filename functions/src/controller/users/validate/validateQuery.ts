import { DateTime } from "luxon";
import TimecardsQuery from "../../../interactor/InteractorObject/timecards/timecardsQuery";
import UsersQuery from "../../../interactor/InteractorObject/users/usersQuery";

export default class ValidateTimecardsQuery {
  constructor(private since?: DateTime, private until?: DateTime) {}

  createWithValid(): UsersQuery | undefined {
    return new TimecardsQuery(this.since, this.until);
  }
}
