import { DateTime } from "luxon";

export default class UsersQuery {
	readonly id:string;
	readonly userId:string;

  constructor(id?:any,userId?:any
  ) {
  if(isString(id)){
  this.id = id;
  }
  if(isString(userId){
  this.userId =userId;
  }
  }
}
