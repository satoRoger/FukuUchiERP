import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsQuery from "../InteractorObject/workflows/workflowsQuery";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";

export default async function GetWorkflows(
  query: WorkflowsQuery
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const collection = await repository.search();

  const result: WorkflowAPIInterface[] = [];

  for (let workflow of collection) {
    const w: WorkflowAPIInterface = {
      id: workflow.id.value,
      drafterId: workflow.dtafter.id.value,
      approversId: workflow.approversId.value,
      index: workflow.index.value,
      petitionDate: workflow.petitionDate,
      state: workflow.state,
      type: workflow.type,
      vacationDate: workflow.vacationDate,
    };
    result.push(w);
  }

  return result;
}
