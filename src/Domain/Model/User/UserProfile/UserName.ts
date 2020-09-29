export default class EmployeeName {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public value(): string {
    return this.name;
  }
}
