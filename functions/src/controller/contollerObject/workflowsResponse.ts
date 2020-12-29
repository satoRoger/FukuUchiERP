import { injectable } from "inversify";
import { DateTime } from "luxon";
import UsersObject from "../../interactor/src/InteractorObject/users/usersObject";
import UsersResponseInterface from "../../interactor/src/InteractorObject/users/usersResponse";
import WorkflowsObject from "../../interactor/src/InteractorObject/workflows/workflowsObject";
import WorkflowsResponseInterface from "../../interactor/src/InteractorObject/workflows/workflowsResponse";

@injectable()
export default class WorkflowsResponse implements WorkflowsResponseInterface {
  private result?: WorkflowsObject[];

  setResult = (result: WorkflowsObject[]) => {
    this.result = result;
  };
  parse = () => {
    if (this.result) {
      return this.result.map((workflow) => {
        return {};
      });
    } else {
      return [];
    }
  };
}
