const WorkflowType = {
  paidVacation: "paidVacation",
  paidVacationAM: "paidVacationAM",
  paidVacationPM: "paidVacationPM",
} as const;

type WorkflowType = typeof WorkflowType[keyof typeof WorkflowType];
export default WorkflowType;
