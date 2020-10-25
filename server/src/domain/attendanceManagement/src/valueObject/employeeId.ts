import { errorMessageList } from "../common/message";

export default class EmployeeId {
  constructor(private id: string) {
    if (id.length === 0) {
      throw new Error(errorMessageList.LengthZeroIdIsProhivited);
    }
    this.id = id;
  }

  get value() {
    return this.id;
  }

  equal: (object: EmployeeId) => boolean = (object) => {
    return this.id === object.value;
  };
}
