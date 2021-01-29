import { app } from "firebase-admin";
import { DateTime } from "luxon";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";
import TypeValidateError from "../../../../controller/src/error/typeValidateError";
import {
  isString,
  isISOString,
  isDateTime,
  isWorkflowType,
} from "../../../../util/isType/isType";

export default class WorkflowsPostParam {
  readonly drafterId: string;
  readonly approverListId: string;
  readonly petitionDate: DateTime;
  readonly type: WorkflowType;
  readonly vacationDate?: DateTime;
  constructor(
    drafterId: any,
    approverListId: any,
    petitionDate: any,
    type: any,
    vacationDate: any
  ) {
    if (isString(drafterId)) {
      this.drafterId = drafterId;
    } else {
      throw TypeValidateError("drafterId", "string");
    }
    if (isString(approverListId)) {
      this.approverListId = approverListId;
    } else {
      throw TypeValidateError("approverListId", "string");
    }
    if (isISOString(petitionDate)) {
      this.petitionDate = DateTime.fromISO(petitionDate);
    } else if (isDateTime(petitionDate)) {
      this.petitionDate = petitionDate;
    } else {
      throw TypeValidateError("petitionDate", "ISOString");
    }

    if (isWorkflowType(type)) {
      this.type = type;
    } else {
      throw TypeValidateError("type", "string");
    }

    if (isISOString(vacationDate)) {
      this.vacationDate = DateTime.fromISO(vacationDate);
    } else if (isDateTime(vacationDate)) {
      this.vacationDate = vacationDate;
    }
  }
}
