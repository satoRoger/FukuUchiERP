import { DateTime } from "luxon";
import WorkflowsPostParam from "../../../interactor/src/InteractorObject/workflows/workflowsPostParam";
import WorkflowType from "../../../domain/workflow/src/valueObject/workflowType";

export default class ValidateWorkflowsPostParam {
  constructor(
    private type?: WorkflowType,
    private drafterId?: string,
    private approversId?: string,
    private petitionDate?: DateTime,
    private vacationDate?: DateTime
  ) {}

  public createWithValid(): WorkflowsPostParam | undefined {
    if (this.drafterId && this.approversId && this.petitionDate && this.type) {
      const param: WorkflowsPostParam = {
        drafterId: this.drafterId,
        approversId: this.approversId,
        petitionDate: this.petitionDate,
        type: this.type,
        vacationDate: this.vacationDate,
      };
      return param;
    } else {
      return undefined;
    }
  }
}
