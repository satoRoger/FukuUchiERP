import { DateTime } from "luxon";

export default class UsersQuery {
  constructor(
    readonly since?: DateTime,
    readonly until?: DateTime,
    readonly userId?: string
  ) {}
}
