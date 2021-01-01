import { injectable } from "inversify";
import Workflow from "../../../domain/workflow/src/entity/workflow/workflow";
import admin from "../../../framework/firebase/adminInitialize";
import WorkflowCollection from "../../../domain/workflow/src/entity/workflow/workflowCollection";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import Employee from "../../../domain/workflow/src/entity/employee/employee";
import WorkflowFactory from "../../../domain/workflow/src/entity/workflow/workflowFactory";
import { DateTime } from "luxon";

@injectable()
export default class WorkflowsRepositoryFS implements WorkflowRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("workflows");
  }

  async save(workflow: Workflow): Promise<Workflow> {
    const drafterRef = this.database
      .collection("users")
      .doc(workflow.dtafter.id.value);
    const approversRef = this.database
      .collection("approvers")
      .doc(workflow.approversId.value);

    const vacationDate = workflow.vacationDate
      ? workflow.vacationDate.toJSDate()
      : null;

    await this.repository.add({
      approversId: approversRef,
      drafterId: drafterRef,
      index: 0,
      petitionDate: workflow.petitionDate.toJSDate(),
      state: workflow.state,
      type: workflow.type,
      vacationDate: vacationDate,
    });
    return workflow;
  }
  async search(drafter?: Employee): Promise<WorkflowCollection> {
    let queryRepository:
      | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = this
      .repository;

    if (drafter) {
      const drafterRef = this.database
        .collection("users")
        .doc(drafter.id.value);
      queryRepository = queryRepository.where("drafterId", "==", drafterRef);
    }

    const snapshot = await queryRepository.get();

    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const drafterDoc = await data.drafterId.get();
      const approverDoc = await data.approversId.get();

      const vacationDate = data.vacationDate
        ? DateTime.fromJSDate(data.vacationDate)
        : undefined;

      return new WorkflowFactory().create(
        doc.id,
        approverDoc.id,
        drafterDoc.id,
        data.index,
        DateTime.fromJSDate(data.petitionDate),
        data.state,
        data.type,
        vacationDate
      );
    });

    return Promise.all(result).then((workflows) => {
      const collection = new WorkflowCollection();
      for (let workflow of workflows) {
        collection.add(workflow);
      }
      return collection;
    });
  }
}
