export default class WorkflowIndex {
  constructor(private _index: number) {}
  public get value() {
    return this._index;
  }
}
