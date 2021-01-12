import { DateTime } from "luxon";
import { isString } from "../../../../util/isType/isType";

export default class FacilitiesQuery {
  readonly id?: string;
  constructor(id?: any) {
    if (isString(id)) {
      this.id = id;
    }
  }
}
