import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";

export default class UsersQuery {
  readonly id: string;
  readonly userId: string;

  constructor(id?: any, userId?: any) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw "";
    }
    if (isString(userId)) {
      this.userId = userId;
    } else {
      throw "";
    }
  }
}
