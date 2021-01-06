import {param} from "express-validator"


export default class ValidateEventsQuery {
  constructor(private since?: DateTime, private until?: DateTime) {}

  createWithValid(): EventsQuery | undefined {
    return new EventsQuery(this.since, this.until);
  }
}
