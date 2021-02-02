import FireTimestamp from '../../common/firestoreType/fireTimestamp';
import FireString from '../../common/firestoreType/fireString';
import FireUserRefference from '../../common/firestoreType/fireUserRefference';
import { DateTime } from 'luxon';
import FireNumber from '../../common/firestoreType/fireNumber';
import WorkflowState from '../../../../domain/workflow/src/valueObject/workflowState';
import WorkflowType from '../../../../domain/workflow/src/valueObject/workflowType';
import FireApproverListRefference from '../../common/firestoreType/fireApproverListRefference';
import WorkflowsProperty from './workflowsProperty';

export default class FireWorkflowsModel {
	private approverListId: FireApproverListRefference;
	private drafterId: FireUserRefference;
	private index: FireNumber;
	private petitionDate: FireTimestamp;
	private status: FireString;
	private type: FireString;
	private vacationDate: FireTimestamp;

	constructor(
		connectionDB: FirebaseFirestore.Firestore,
		approverListId: string,
		drafterId: string,
		index: number,
		petitionDate: DateTime,
		status: WorkflowState,
		type: WorkflowType,
		vacationDate: DateTime
	) {
		this.approverListId = new FireApproverListRefference(connectionDB, approverListId);
		this.drafterId = new FireUserRefference(connectionDB, drafterId);
		this.index = new FireNumber(connectionDB, index);
		this.petitionDate = new FireTimestamp(connectionDB, petitionDate);
		this.status = new FireString(connectionDB, status);
		this.type = new FireString(connectionDB, type);
		this.vacationDate = new FireTimestamp(connectionDB, vacationDate);
	}
	toFirebaseStoreFormat(): FirebaseFirestore.DocumentData {
		return {
			[WorkflowsProperty.approverListId]: this.approverListId.toFireStore(),
			[WorkflowsProperty.drafterId]: this.drafterId.toFireStore(),
			[WorkflowsProperty.index]: this.index.toFireStore(),
			[WorkflowsProperty.petitionDate]: this.petitionDate.toFireStore(),
			[WorkflowsProperty.status]: this.status.toFireStore(),
			[WorkflowsProperty.type]: this.type.toFireStore(),
			[WorkflowsProperty.vacationDate]: this.vacationDate.toFireStore(),
		};
	}
}
