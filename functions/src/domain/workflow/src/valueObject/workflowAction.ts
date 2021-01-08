const WorkflowAction = {
  accept: "accept",
  deny:"deny"
} as const;

type WorkflowAction = typeof WorkflowAction[keyof typeof WorkflowAction];
export default WorkflowAction;
