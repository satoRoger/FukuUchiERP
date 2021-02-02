const WorkflowsProperty = {
  approverListId: "approverListId",
  drafterId: "drafterId",
  index: "index",
  petitionDate: "petitionDate",
  status: "status",
  type: "type",
  vacationDate: "vacationDate",
} as const;

type WorkflowsProperty = typeof WorkflowsProperty[keyof typeof WorkflowsProperty];
export default WorkflowsProperty;
