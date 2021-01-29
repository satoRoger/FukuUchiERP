import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";
import TypeValidateError from "../../../../controller/src/error/typeValidateError";

export default class UsersDeleteParam {
  readonly userId: string;

  constructor(userId?: any) {
    if (isString(userId)) {
      this.userId = userId;
    } else {
      throw TypeValidateError("userId", "string");
    }
  }
}
