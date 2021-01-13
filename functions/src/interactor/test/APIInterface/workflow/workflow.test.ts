import { DateTime } from "luxon";
import WorkflowFactory from "../../../../domain/workflow/src/entity/workflow/workflowFactory";
import WorkflowState from "../../../../domain/workflow/src/valueObject/workflowState";
import WorkflowType from "../../../../domain/workflow/src/valueObject/workflowType";
import WorkflowAPIInterface from "../../../src/APIInterface/workflow/workflow";
describe("APIInterface-workflow", () => {
  test("ドメインからInterfaceが正しく変換されるか", () => {
    const petititonDate = DateTime.local();
    const vacationDate = DateTime.local();

    const domainWorkflow = new WorkflowFactory().create(
      "test",
      "approverListId",
      "drafterId",
      0,
      petititonDate,
      WorkflowState.wait,
      WorkflowType.paidVacation,
      vacationDate
    );

    const api = WorkflowAPIInterface.fromDomainWorkflow(domainWorkflow);

    expect(api.getObjectValue()).toStrictEqual({
      id: "test",
      approverListId: "approverListId",
      drafterId: "drafterId",
      index: 0,
      petitionDate: petititonDate.toISO(),
      state: WorkflowState.wait,
      type: WorkflowType.paidVacation,
      vacationDate: vacationDate.toISO(),
    });
  });
});
