import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowsPostParam from "../InteractorObject/workflows/workflowsPostParam";
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
      "",
      param.approverListId,
      param.drafterId,
      0,
      param.petitionDate,
      WorkflowState.wait,
      param.type,
      param.vacationDate
    )
  );
  const response: WorkflowAPIInterface[] = [
    WorkflowAPIInterface.fromDomainWorkflow(workflow),
  ];

  return response;
}
