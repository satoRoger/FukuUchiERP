import { injectable } from "inversify";
import { DateTime } from "luxon";
import UsersObject from "../../interactor/InteractorObject/users/usersObject";
import UsersResponseInterface from "../../interactor/InteractorObject/users/usersResponse";
import WorkflowsObject from "../../interactor/InteractorObject/workflows/workflowsObject";
import WorkflowsResponseInterface from "../../interactor/InteractorObject/workflows/workflowsResponse";

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
