import ApproverId from "../../valueObject/approverId";

export default class Approver {
  constructor(private _id: ApproverId) {}

  public get id() {
    return this._id;
  }
}
