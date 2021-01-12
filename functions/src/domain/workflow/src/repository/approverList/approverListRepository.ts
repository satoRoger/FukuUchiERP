import Approver from "../../entity/approver/approver";
import ApproverList from "../../entity/approver/approverList";
import ApproverListCollection from "../../entity/approver/approverListCollection";

export default interface ApproverListRepository {
  save(approverList: ApproverList): Promise<ApproverList>;
  search(approver?: Approver): Promise<ApproverListCollection>;
}
