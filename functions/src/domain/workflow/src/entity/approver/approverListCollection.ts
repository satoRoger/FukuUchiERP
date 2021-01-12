import ApproverList from "./approverList";

export default class ApproverListCollection {
  constructor(private collection: ApproverList[] = new Array<ApproverList>()) {}

  add: (approverList: ApproverList) => this = (approverList) => {
    this.collection.push(approverList);
    return this;
  };

  size: () => number = () => {
    return this.collection.length;
  };

  getData() {
    return this.collection;
  }

  [Symbol.iterator](): Iterator<ApproverList> {
    return this.collection[Symbol.iterator]();
  }
}
