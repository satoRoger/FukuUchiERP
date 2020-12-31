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
  public set approversId(value: ApproversId) {
    this._approversId = value;
  }
  public get id(): WorkflowId {
    return this._id;
  }
  public set id(value: WorkflowId) {
    this._id = value;
  }
  public get vacationDate(): DateTime | undefined {
    return this._vacationDate;
  }
  public set vacationDate(value: DateTime | undefined) {
    this._vacationDate = value;
  }
  public get type(): WorkflowType {
    return this._type;
  }
  public set type(value: WorkflowType) {
    this._type = value;
  }
  public get state(): WorkflowState {
    return this._state;
  }
  public set state(value: WorkflowState) {
    this._state = value;
  }
  public get petitionDate(): DateTime {
    return this._petitionDate;
  }
  public set petitionDate(value: DateTime) {
    this._petitionDate = value;
  }
  public get index(): WorkflowIndex {
    return this._index;
  }
  public set index(value: WorkflowIndex) {
    this._index = value;
  }
  public get dtafter(): Employee {
    return this._dtafter;
  }
  public set dtafter(value: Employee) {
    this._dtafter = value;
  }
}
