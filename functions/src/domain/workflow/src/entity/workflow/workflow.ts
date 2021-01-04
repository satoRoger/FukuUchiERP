import Employee from "../employee/employee";
import { DateTime } from "luxon";
import WorkflowIndex from "../../valueObject/workflowIndex";
import WorkflowState from "../../valueObject/workflowState";
import WorkflowType from "../../valueObject/workflowType";
import WorkflowId from "../../valueObject/workflowId";
import ApproversId from "../../valueObject/approversId";

export default class Workflow {
  constructor(
    private _id: WorkflowId,
    private _approversId: ApproversId,
    private _dtafter: Employee,
    private _index: WorkflowIndex,
    private _petitionDate: DateTime,
    private _state: WorkflowState,
    private _type: WorkflowType,
    private _vacationDate?: DateTime
  ) {}
  public get approversId(): ApproversId {
    return this._approversId;
  }
  public get id(): WorkflowId {
    return this._id;
  }
  public get vacationDate(): DateTime | undefined {
    return this._vacationDate;
  }
  public get type(): WorkflowType {
    return this._type;
  }
  public get state(): WorkflowState {
    return this._state;
  }
  public get petitionDate(): DateTime {
    return this._petitionDate;
  }
  public get index(): WorkflowIndex {
    return this._index;
  }
  public get dtafter(): Employee {
    return this._dtafter;
  }
  
  public get complete():boolean{
	return this._state === WorkflowState.comlete;
  }	  
  
  public approve(){
	  if(this._index + 1 === this._approversId.length()){
		  this._state = WorkflowState.comlete;
	  }else{
		  this._index++;
	  }
  }
  public deny(){
	 this._state = WorkflowState.deny
  }
}
