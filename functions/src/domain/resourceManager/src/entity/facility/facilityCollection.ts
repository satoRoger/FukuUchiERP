import Facility from "./facility";

export default class FacilityCollection implements Iterable<Facility> {
  constructor(private collection: Facility[] = new Array<Facility>()) {}

  add: (facility: Facility) => this = (facility) => {
    this.collection.push(facility);
    return this;
  };

  size: () => number = () => {
    return this.collection.length;
  };

  [Symbol.iterator](): Iterator<Facility> {
    return this.collection[Symbol.iterator]();
  }
}
