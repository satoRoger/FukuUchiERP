import FireTimestamp from "../common/firestoreType/fireTimestamp";
import FireUserRefference from "../common/firestoreType/fireUserRefference";
import { DateTime } from "luxon";
import CollectionName from "../common/collectionName";
import FireFacilityRefference from "../common/firestoreType/fireFacilityRefference";
import FireString from "../common/firestoreType/fireString";
import WorkflowsProperty from "./workflowRepositoryModel/workflowsProperty";

type QueryRepository =
  | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
  | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default class FireWorkflowsSearch {
  private drafterId?: FireUserRefference;

  constructor(
    private connectionDB: FirebaseFirestore.Firestore,
    option: {
      workflowId?: string;
      drafterId?: string;
      approverId?: string;
    }
  ) {
    this.drafterId = option.drafterId
      ? new FireUserRefference(connectionDB, option.drafterId)
      : undefined;
  }
  searchRepository(): QueryRepository {
    let queryRepository: QueryRepository = this.connectionDB.collection(
      CollectionName.timecards
    );

    if (this.drafterId) {
      queryRepository = queryRepository.where(
        WorkflowsProperty.drafterId,
        "==",
        this.drafterId.toFireStore()
      );
    }

    return queryRepository;
  }
}
