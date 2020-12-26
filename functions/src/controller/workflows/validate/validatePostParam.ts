import { DateTime } from "luxon";
import WorkflowsPostParam from "../../../interactor/InteractorObject/workflows/workflowsPostParam";
export default class ValidateWorkflowsPostParam {
  constructor(private type?: string, private vacationDate?: DateTime) {}
  public createWithValid(): WorkflowsPostParam {
    return new WorkflowsPostParam();
  }
}
