import { errorMessageList } from "../../../common/message";

export default class EmployeeId {
  private value: string;

  constructor(id: string) {
    if (id.length === 0) {
      throw new Error(errorMessageList.LengthZeroIdIsProhivited);
    }
    this.value = id;
  }

  id: () => string = () => {
    return this.value;
  };

  equal: (object: EmployeeId) => boolean = (object) => {
    return this.value === object.id();
  };
}
