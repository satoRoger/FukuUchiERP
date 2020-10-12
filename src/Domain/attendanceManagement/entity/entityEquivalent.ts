import Entity from "../../entity/entity";

export default class IsEntityEqual<T extends Entity<T>> {
  private entityA: T;
  private entityB: T;

  constructor(entityA: T, entityB: T) {
    this.entityA = entityA;
    this.entityB = entityB;
  }

  equal: () => boolean = () => {
    return this.entityA.equal(this.entityB);
  };
}
