const WorkflowType = {
  paidVacation: "paidVacation",
} as const;

type WorkflowType = typeof WorkflowType[keyof typeof WorkflowType];
export default WorkflowType;
