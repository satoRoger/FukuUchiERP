import InsuranceCode from "./insuranceCode";
import InsuranceNumber from "./insuranceNumber";
import SocialInsuranceId from "./socialInsuranceId";

export default class SocialInsurance {
  constructor(
    private _code: InsuranceCode,
    private _number: InsuranceNumber
  ) {}

  public get code() {
    return this._code;
  }

  public get number() {
    return this._number;
  }
}
