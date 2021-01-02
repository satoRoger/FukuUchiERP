import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),

  PersonRepository: Symbol.for("PersonRepository"),

  WorkflowRepository: Symbol.for("WorkflowRepository"),

  EventRepository: Symbol.for("EventRepository"),

  AnnouncesRepository: Symbol.for("AnnouncesRepository"),

  FacilityRepository: Symbol.for("FacilityRepository"),
} as const;

type DevelopTypes = typeof DevelopTypes;

export default DevelopTypes;
