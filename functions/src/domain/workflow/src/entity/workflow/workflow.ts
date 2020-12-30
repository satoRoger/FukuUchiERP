import Employee from "../employee/employee";
import { DateTime } from "luxon";
import WorkflowIndex from "../../valueObject/workflowIndex";
import WorkflowType from "../../valueObject/workflowState";
import WorkflowState from "../../valueObject/workflowState";

export default class Workflow {
  constructor(
    private approvers: Employee[],
    dtafter: Employee,
    index: WorkflowIndex,
    petitionDate: DateTime,
    state: WorkflowState,
    type: WorkflowType,
    vacationDate: DateTime
  ) {}
}
