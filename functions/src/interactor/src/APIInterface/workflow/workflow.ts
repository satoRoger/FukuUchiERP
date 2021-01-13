import { DateTime } from "luxon";
import WorkflowState from "../../../../domain/workflow/src/valueObject/workflowState";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";
import Workflow from "../../../../domain/workflow/src/entity/workflow/workflow";
import {
  isDateTime,
  isWorkflowState,
  isWorkflowType,
} from "../../../../util/isType/isType";
import {
  isString,
  isNumber,
  isISOString,
} from "../../../../util/isType/isType";

export default class WorkflowAPIInterface {
  readonly id: string;
  readonly drafterId: string;
  readonly approverListId: string;
  readonly index: number;
  readonly petitionDate: string;
  readonly state: WorkflowState;
  readonly type: WorkflowType;
  readonly vacationDate?: string;

  static fromDomainWorkflow(workflow: Workflow) {
    return new WorkflowAPIInterface(
      workflow.id.value,
      workflow.dtafterId.value,
      workflow.approverListId.value,
      workflow.index.value,
      workflow.petitionDate,
      workflow.state,
      workflow.type,
      workflow.vacationDate
    );
  }

  getObjectValue() {
    return {
      id: this.id,
      drafterId: this.drafterId,
      approverListId: this.approverListId,
      index: this.index,
      petitionDate: this.petitionDate,
      state: this.state,
      type: this.type,
      vacationDate: this.vacationDate,
    };
  }

  constructor(
    id: any,
    drafterId: any,
    approverListId: any,
    index: any,
    petitionDate: any,
    state: any,
    type: any,
    vacationDate?: any
  ) {
    if (isString(id)) {
      this.id = id;
    } else {
      throw "";
    }
    if (isString(drafterId)) {
      this.drafterId = drafterId;
    } else {
      throw "";
    }

    if (isString(approverListId)) {
      this.approverListId = approverListId;
    } else {
      throw "";
    }
    if (isNumber(index)) {
      this.index = index;
    } else {
      throw "";
    }
    if (isISOString(petitionDate)) {
      this.petitionDate = petitionDate;
    } else if (isDateTime(petitionDate)) {
      this.petitionDate = petitionDate.toISO();
    } else {
      throw "";
    }
    if (isWorkflowState(state)) {
      this.state = state;
    } else {
      throw "";
    }

    if (isWorkflowType(type)) {
      this.type = type;
    } else {
      throw "";
    }
    if (isISOString(petitionDate)) {
      this.petitionDate = petitionDate;
    } else if (isDateTime(petitionDate)) {
      this.petitionDate = petitionDate.toISO();
    } else {
    }
    if (isISOString(vacationDate)) {
      this.vacationDate = vacationDate;
    } else if (isDateTime(vacationDate)) {
      this.vacationDate = vacationDate.toISO();
    }
  }
}
