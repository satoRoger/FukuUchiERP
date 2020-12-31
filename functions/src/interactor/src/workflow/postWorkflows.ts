import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowsPostParam from "../InteractorObject/workflows/workflowsPostParam";
import WorkflowsResponseInterface from "../InteractorObject/workflows/workflowsResponse";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import WorkflowFactory from "../../../domain/workflow/src/entity/workflow/workflowFactory";
import WorkflowState from "../../../domain/workflow/src/valueObject/workflowState";

export default async function PostWorkflows(
  param: WorkflowsPostParam
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );
  const workflow = await repository.save(
    new WorkflowFactory().create(
      "empty",
      param.approversId,
      param.drafterId,
      0,
      param.petitionDate,
      WorkflowState.wait,
      param.type,
      param.vacationDate
    )
  );
  const response: WorkflowAPIInterface[] = [
    {
      id: workflow.id.value,
      drafterId: workflow.dtafter.id.value,
      approversId: workflow.approversId.value,
      index: workflow.index.value,
      petitionDate: workflow.petitionDate,
      state: workflow.state,
      type: workflow.type,
      vacationDate: workflow.vacationDate,
    },
  ];

  return response;
}
