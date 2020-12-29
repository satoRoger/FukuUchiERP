import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import UsersObject from "../../../interactor/src/InteractorObject/users/usersObject";
import WorkflowsResponseInterface from "../../../interactor/src/InteractorObject/workflows/workflowsResponse";
import container from "../../../util/di/inversify.config";
import Types from "../../../util/di/types";

export default async function getWorkflows(): Promise<WorkflowsResponseInterface> {
  const response = container.get<WorkflowsResponseInterface>(
    Types.TimecardsResponse
  );

  const repository = container.get<PersonRepository>(Types.PersonRepository);

  const collection = await repository.search();
  const result: UsersObject[] = [];
  for (let {} of collection) {
    result.push(new UsersObject());
  }

  response.setResult(result);
  return response;
}
