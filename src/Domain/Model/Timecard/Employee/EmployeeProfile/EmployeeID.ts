export default class EmployeeID {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
  public value(): string {
    return this.id;
  }
}
