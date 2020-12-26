import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardsResponse: Symbol.for("TimecardsResponse"),

  UsersResponse: Symbol.for("UsersResponse"),
  PersonRepository: Symbol.for("PersonRepository"),

  WorkflowRepository: Symbol.for("WorkflowRepository"),
  WorkflowsResponse: Symbol.for("WorkflowsResponse"),

  EventRepository: Symbol.for("EventRepository"),
  EventsResponse: Symbol.for("EventsResponse"),

  AnnouncesRepository: Symbol.for("AnnouncesRepository"),
  AnnouncesResponse: Symbol.for("AnnouncesResponse"),
} as const;

type DevelopTypes = typeof DevelopTypes;

export default DevelopTypes;
