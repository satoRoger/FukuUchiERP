export default class Address {
  constructor(private address: string) {}
  public get value() {
    return this.address;
  }
}
