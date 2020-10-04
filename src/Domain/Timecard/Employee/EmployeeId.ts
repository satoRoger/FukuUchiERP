import EmployeeIdIsEmptyError from "../Exception/EmployeeIdIsEmptyError";

export default class EmployeeId {
  readonly id: string;

  constructor(id: string) {
    if (id.length === 0) {
      throw new EmployeeIdIsEmptyError();
    } else {
      this.id = id;
    }
  }
}
