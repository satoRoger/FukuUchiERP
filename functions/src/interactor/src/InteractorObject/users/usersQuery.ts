import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";

export default class UsersQuery {
  readonly userId?: string;
  readonly facilityId?: string;

  constructor(userId?: any, facilityId?: any) {
    if (isString(userId)) {
      this.userId = userId;
    }
    if (isString(facilityId)) {
      this.facilityId = facilityId;
    }
  }
}
