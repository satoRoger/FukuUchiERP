export interface Result<T, E> {
  isSuccess: () => boolean;
  isFailure: () => boolean;
}

export class Success<T, E> implements Result<T, E> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  type = "success" as const;
  getValue: () => T = () => {
    return this.value;
  };
  isSuccess(): this is Success<T, E> {
    return true;
  }
  isFailure(): this is Failure<T, E> {
    return false;
  }
}

export class Failure<T, E> implements Result<T, E> {
  private value: E;
  constructor(value: E) {
    this.value = value;
  }
  type = "failure" as const;
  getValue: () => E = () => {
    return this.value;
  };
  isSuccess(): this is Success<T, E> {
    return false;
  }
  isFailure(): this is Failure<T, E> {
    return true;
  }
}
