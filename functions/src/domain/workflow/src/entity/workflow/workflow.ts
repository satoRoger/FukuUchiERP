import { DateTime } from 'luxon';
import WorkflowIndex from '../../valueObject/workflowIndex';
import WorkflowState from '../../valueObject/workflowState';
import WorkflowType from '../../valueObject/workflowType';
import WorkflowId from '../../valueObject/workflowId';
import Drafter from '../drafter/drafter';
import ApproverId from '../../valueObject/approverId';

export default class Workflow {
	constructor(
		private _id: WorkflowId,
		private _approversId: ApproverId,
		private _dtafter: Drafter,
		private _index: WorkflowIndex,
		private _petitionDate: DateTime,
		private _state: WorkflowState,
		private _type: WorkflowType,
		private _vacationDate?: DateTime
	) {}
	public get approversId(): ApproverId {
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
	public get dtafter(): Drafter {
		return this._dtafter;
	}

	public get complete(): boolean {
		return this._state === WorkflowState.complete;
	}

	public approve() {
    //Todo
		if (this._index.value + 1 === 2) {
			this._state = WorkflowState.complete;
		} else {
			this._index = new WorkflowIndex(this._index.value + 1);
		}
	}
	public deny() {
		this._state = WorkflowState.deny;
	}
}
