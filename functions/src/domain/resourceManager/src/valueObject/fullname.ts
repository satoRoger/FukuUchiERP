import Name from "./name";

export default class Fullname {
  constructor(private _familyName: Name, private _givenName: Name) {}
  public get familyName() {
    return this._familyName;
  }
  public get givenName() {
    return this._givenName;
  }
}
