import Fullname from "../../../../domain/resourceManager/src/valueObject/fullname";
import { isString } from "../../../../util/isType/isType";

export default class FullnameAPIInterface {
  readonly familyName?: string;
  readonly givenName?: string;

  static fromDomainFullname(fullname: Fullname): FullnameAPIInterface {
    console.log(fullname.familyName);
    console.log(fullname.familyName.value);
    return new FullnameAPIInterface(
      fullname.familyName.value,
      fullname.givenName.value
    );
  }

  constructor(familyName: any, givenName: any) {
    console.log(typeof familyName);
    if (isString(familyName)) {
      this.familyName = familyName;
    }
    if (isString(givenName)) {
      this.givenName = givenName;
    }
  }
}
