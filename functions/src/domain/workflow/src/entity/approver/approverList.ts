import ApproverId from "../../valueObject/approverId";
import ApproverListId from "../../valueObject/approverListId";
import Approver from "./approver";

export default class ApproverList implements Iterable<Approver> {
  constructor(
    private _id: ApproverListId,
    private _approverList: Approver[] = new Array<Approver>()
  ) {}

  public get id() {
    return this._id;
  }
  add: (approver: Approver) => this = (approver) => {
    this._approverList.push(approver);
    return this;
  };

  getApprovers() {
    return this._approverList;
  }

  [Symbol.iterator](): Iterator<Approver> {
    return this._approverList[Symbol.iterator]();
  }
}
