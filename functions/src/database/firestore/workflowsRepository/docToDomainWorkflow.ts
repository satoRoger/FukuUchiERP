import Person from '../../../domain/resourceManager/src/entity/person/person';
import PersonFactory from '../../../domain/resourceManager/src/entity/person/personFactory';
import Fullname from '../../../domain/resourceManager/src/valueObject/fullname';
import WorkflowsProperty from './workflowRepositoryModel/workflowsProperty';
import WorkflowFactory from '../../../domain/workflow/src/entity/workflow/workflowFactory';
import Workflow from '../../../domain/workflow/src/entity/workflow/workflow';
export default class DocToDomainUser {
	constructor(private document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) {}

	async toDomain(): Promise<Workflow> {
		const id = this.document.id;
		const approverListId = this.document.get(WorkflowsProperty.approverListId);
		const drafterId = this.document.get(WorkflowsProperty.drafterId);
		const index = this.document.get(WorkflowsProperty.index);
		const petitionDate = this.document.get(WorkflowsProperty.petitionDate);
		const status = this.document.get(WorkflowsProperty.status);
		const type = this.document.get(WorkflowsProperty.type);
		const vacationDate = this.document.get(WorkflowsProperty.vacationDate);

		let approverListDoc;

		if (approverListId) {
			approverListDoc = await approverListId.get();
		}

		let userDoc;

		if (drafterId) {
			userDoc = await drafterId.get();
		}

		return new WorkflowFactory().create(
			id,
			approverListDoc ? approverListDoc.id : undefined,
			userDoc ? userDoc.id : undefined,
			index,
			petitionDate,
			status,
			type,
			vacationDate
		);
	}
}
