import Workflow from "./workflow";
import { DateTime } from "luxon";
import WorkflowState from "../../valueObject/workflowState";
import WorkflowType from "../../valueObject/workflowType";
import EmployeeCollection from "../employee/employeeCollection";
import Employee from "../employee/employee";
import EmployeeId from "../../valueObject/employeeId";
import WorkflowIndex from "../../valueObject/workflowIndex";
import EmployeeCollectionId from "../../valueObject/employeeCollectionId";
import WorkflowId from "../../valueObject/workflowId";
import ApproversId from "../../valueObject/approversId";

export default class WorkflowFactory {
  public create(
    id: string,
    approversId: string,
    drafterId: string,
    index: number,
    petitionDate: DateTime,
    state: WorkflowState,
    type: WorkflowType,
    vacationDate?: DateTime
  ): Workflow {
    return new Workflow(
      new WorkflowId(id),
      new ApproversId(approversId),
      new Employee(new EmployeeId(drafterId)),
      new WorkflowIndex(index),
      petitionDate,
      state,
      type,
      vacationDate
    );
  }
}
