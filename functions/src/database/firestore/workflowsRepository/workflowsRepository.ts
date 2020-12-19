import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import Workflow from "../../../domain/workflow/src/entity/workflow/workflow";
import admin from "../../../framework/firebase/adminInitialize";
import WorkflowCollection from "../../../domain/workflow/src/entity/workflow/workflowCollection";

@injectable()
export default class WorkflowsRepositoryFS implements WorkflowRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }

  async save(workflow: Workflow): Promise<Workflow> {
    const saveWorkflow = workflow;
    for (let [i, v] of Object.entries(workflow)) {
      if (typeof v === "undefined") {
        saveWorkflow[i] = null;
      }
    }
    await this.repository.add({});
    return workflow;
  }
  search(): Promise<WorkflowCollection> {
    throw new Error("Method not implemented.");
  }
}
