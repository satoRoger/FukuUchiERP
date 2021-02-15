import Fullname from "../../../../domain/resourceManager/src/valueObject/fullname";
import { isString } from "../../../../util/isType/isType";

export default class FullnameAPIInterface {
  readonly familyName?: string;
  readonly givenName?: string;

  static fromDomainFullname(fullname: Fullname): FullnameAPIInterface {
    return new FullnameAPIInterface(
      fullname.familyName.value,
      fullname.givenName.value
    );
  }

  constructor(familyName: any, givenName: any) {
    if (isString(familyName)) {
      this.familyName = familyName;
    }
    if (isString(givenName)) {
      this.givenName = givenName;
    }
  }
}
