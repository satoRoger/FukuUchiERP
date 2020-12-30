import Workflow from "./workflow";

export default class WorkflowCollection {
  constructor(private collection: Workflow[] = new Array<Workflow>()) {}

  add: (workflow: Workflow) => this = (workflow) => {
    this.collection.push(workflow);
    return this;
  };

  size: () => number = () => {
    return this.collection.length;
  };

  [Symbol.iterator](): Iterator<Workflow> {
    return this.collection[Symbol.iterator]();
  }
}
