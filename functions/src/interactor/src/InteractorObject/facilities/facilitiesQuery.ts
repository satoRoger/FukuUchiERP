import { DateTime } from "luxon";

export default class FacilitiesQuery {
	readonly id?:string;
  constructor(id?: any) {
	  if(isString(id)){
		  this.id = id;
	  }
  }
}
