const WorkflowState = {
  wait: "wait",
  complete: "complete",
  deny: "deny",
} as const;

type WorkflowState = typeof WorkflowState[keyof typeof WorkflowState];
export default WorkflowState;
