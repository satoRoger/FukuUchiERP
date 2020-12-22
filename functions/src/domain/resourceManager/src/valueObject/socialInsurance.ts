export default class SocialInsurance{
  constructor(private _id : SocialInsuranceId,private _code:InsuranceCode,private _number:InsuranceNumber){}
  
  public get id(){
	  return this._id;
  }
  
  public get code(){
	  return this._code;
  }
  
  public get number(){
	  return this._number;
  }
}