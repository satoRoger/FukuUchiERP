const WorkflowState = {
  wait: "wait",
  complete: "comlete",
  deny: "deny",
} as const;

type WorkflowState = typeof WorkflowState[keyof typeof WorkflowState];
export default WorkflowState;
