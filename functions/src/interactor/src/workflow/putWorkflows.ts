import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";
import WorkflowRepository from "../../../domain/workflow/src/repository/workflow/workflowRespository";
import WorkflowAPIInterface from "../APIInterface/workflow/workflow";
import WorkflowsPutParam from "../InteractorObject/workflows/workflowsPutParam";
import WorkflowId from "../../../domain/workflow/src/valueObject/workflowId";
import EventsPostParam from "../InteractorObject/events/eventsPostParam";
import EventType from "../../../domain/eventManager/src/valueObject/eventType";
import PostEvents from "../events/postEvents";
import WorkflowAction from "../../../domain/workflow/src/valueObject/workflowAction";

export default async function PutWorkflows(
  param: WorkflowsPutParam
): Promise<WorkflowAPIInterface[]> {
  const repository = container.get<WorkflowRepository>(
    Types.WorkflowRepository
  );

  const workflowId = new WorkflowId(param.id);
  const collection = await repository.search(workflowId);
  const workflow = collection.getData()[0];
  if (param.action === WorkflowAction.accept) {
    workflow.approve();
  } else if (param.action === WorkflowAction.deny) {
    workflow.deny();
  }

  const newWorkflow = await repository.save(workflow);

  if (workflow.complete) {
    const postEvent = new EventsPostParam(
      EventType.UserVacation,
      workflow.vacationDate,
      workflow.vacationDate,
      "有給",
      workflow.dtafterId.value,
      undefined
    );
    await PostEvents(postEvent);
  }

  return [WorkflowAPIInterface.fromDomainWorkflow(newWorkflow)];
}
