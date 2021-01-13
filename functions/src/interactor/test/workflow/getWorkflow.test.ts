import WorkflowsQuery from "../../src/InteractorObject/workflows/workflowsQuery";
import GetWorkflows from "../../src/workflow/getWorkflows";

describe("interator-getWorkflow", () => {
  test("正しくデータを取得できるか", async () => {
    const data = await GetWorkflows(new WorkflowsQuery());
    expect(data[0].getObjectValue()).toStrictEqual({
      id: "arqBy5LjR3oERhO6tSOU",
      drafterId: "testuser001",
      approverListId: "approvers",
      index: 0,
      petitionDate: null,
      state: "wait",
      type: "paidVacation",
      vacationDate: null,
    });
  });
});
