import { injectable } from "inversify";
import { DateTime } from "luxon";
import UsersObject from "../../interactor/InteractorObject/users/usersObject";
import UsersResponseInterface from '../../interactor/InteractorObject/users/usersResponse';

@injectable()
export default class UsersResponse implements UsersResponseInterface {
  private result?: UsersObject[];

  setResult = (result: UsersObject[]) => {
    this.result = result;
  };
  parse = () => {
    if (this.result) {
      return this.result.map((user) => {
        return {};
      });
    } else {
      return [];
    }
  };
}