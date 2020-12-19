import Workflow from "./workflow";

export default class Workflowfactory {
  public create(): Workflow {
    return new Workflow();
  }
}
