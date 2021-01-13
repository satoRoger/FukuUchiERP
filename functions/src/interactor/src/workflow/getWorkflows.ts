import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowsQuery from "../InteractorObject/workflows/workflowsQuery";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import Drafter from "../../../domain/workflow/src/entity/drafter/drafter";
import Approver from "../../../domain/workflow/src/entity/approver/approver";
import DrafterId from "../../../domain/workflow/src/valueObject/drafterId";
import ApproverId from "../../../domain/workflow/src/valueObject/approverId";

export default async function GetWorkflows(
  query: WorkflowsQuery
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const drafter = query.drafterId
    ? new Drafter(new DrafterId(query.drafterId))
    : undefined;

  const approver = query.approverId
    ? new Approver(new ApproverId(query.approverId))
    : undefined;
  const collection = await repository.search(drafter, approver);

  return collection
    .getData()
    .map((workflow) => WorkflowAPIInterface.fromDomainWorkflow(workflow));
}
