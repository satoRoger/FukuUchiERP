import { injectable } from "inversify";
import Workflow from "../../../domain/workflow/src/entity/workflow/workflow";
import admin from "../../../framework/firebase/adminInitialize";
import WorkflowCollection from "../../../domain/workflow/src/entity/workflow/workflowCollection";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowFactory from "../../../domain/workflow/src/entity/workflow/workflowFactory";
import { DateTime } from "luxon";
import Drafter from "../../../domain/workflow/src/entity/drafter/drafter";
import Approver from "../../../domain/workflow/src/entity/approver/approver";
import WorkflowId from "../../../domain/workflow/src/valueObject/workflowId";

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
      .doc(workflow.dtafterId.value);
    const approverListRef = this.database
      .collection("approverList")
      .doc(workflow.approverListId.value);

    const vacationDate = workflow.vacationDate
      ? workflow.vacationDate.toJSDate()
      : null;

    //"更新"
    if (workflow.id.value != "") {
      await this.repository.doc(workflow.id.value).set({
        approverListId: approverListRef,
        drafterId: drafterRef,
        index: 0,
        petitionDate: workflow.petitionDate.toJSDate(),
        state: workflow.state,
        type: workflow.type,
        vacationDate: vacationDate,
      });
    }
    //"新規"
    else {
      await this.repository.add({
        approverListId: approverListRef,
        drafterId: drafterRef,
        index: 0,
        petitionDate: workflow.petitionDate.toJSDate(),
        state: workflow.state,
        type: workflow.type,
        vacationDate: vacationDate,
      });
    }
    return workflow;
  }

  async search(
    workflowId?: WorkflowId,
    drafter?: Drafter,
    approver?: Approver
  ): Promise<WorkflowCollection> {
    let queryRepository:
      | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
      | FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = this
      .repository;

    if (workflowId) {
      const doc = await this.repository.doc(workflowId.value).get();
      const data = doc.data();
      let collection = new WorkflowCollection();
      if (!data) {
        return collection;
      }

      const drafterDoc = await data.drafterId.get();
      const approverListDoc = await data.approverListId.get();

      const vacationDate = data.vacationDate
        ? DateTime.fromJSDate(data.vacationDate.toDate())
        : undefined;

      const workflow = new WorkflowFactory().create(
        doc.id,
        approverListDoc.id,
        drafterDoc.id,
        data.index,
        DateTime.fromJSDate(data.petitionDate.toDate()),
        data.state,
        data.type,
        vacationDate
      );
      collection.add(workflow);
      return collection;
    }

    if (drafter) {
      const drafterRef = this.database
        .collection("users")
        .doc(drafter.id.value);
      queryRepository = queryRepository.where("drafterId", "==", drafterRef);
    }
    if (approver) {
      const approverRef = this.database
        .collection("users")
        .doc(approver.id.value);

      const approverRepository = this.database
        .collection("approverList")
        .where("list", "array-contains", approverRef);

      const approverSnapshot = await approverRepository.get();
      const approverList = approverSnapshot.docs.map((doc) =>
        this.database.collection("approverList").doc(doc.id)
      );
      if (approverList.length > 0) {
        queryRepository = queryRepository.where(
          "approverListId",
          "in",
          approverList
        );
      } else {
        //必ず一致しないようにする
        queryRepository = queryRepository.where("index", "==", -1);
      }
    }

    const snapshot = await queryRepository.get();

    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const drafterDoc = await data.drafterId.get();
      const approverListDoc = await data.approverListId.get();

      const vacationDate = data.vacationDate
        ? DateTime.fromJSDate(data.vacationDate.toDate())
        : undefined;

      return new WorkflowFactory().create(
        doc.id,
        approverListDoc.id,
        drafterDoc.id,
        data.index,
        DateTime.fromJSDate(data.petitionDate.toDate()),
        data.state,
        data.type,
        vacationDate
      );
    });

    return Promise.all(result).then(async (workflows) => {
      const collection = new WorkflowCollection();
      for (let workflow of workflows) {
        collection.add(workflow);
      }
      return collection;
    });
  }
  async remove(workflowId: WorkflowId): Promise<WorkflowId> {
    await this.repository.doc(workflowId.value).delete();
    return workflowId;
  }
}
