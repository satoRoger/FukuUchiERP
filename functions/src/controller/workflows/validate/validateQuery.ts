import WorkflowsQuery from "../../../interactor/src/InteractorObject/workflows/workflowsQuery";
export default class ValidateWorkflowsQuery {
  createWithValid(): WorkflowsQuery | undefined {
    return new WorkflowsQuery();
  }
}
