export default interface Entity<T> {
  equal: (entity: T) => boolean;
}
