import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardsResponse: Symbol.for("TimecardsResponse"),
  UsersResponse: Symbol.for("UsersResponse"),
  PersonRepository: Symbol.for("PersonRepository"),
  WorkflowsRepository: Symbol.for("WorkflowsRepository"),
  WorkflowsResponse: Symbol.for("WorkflowsResponse"),
} as const;

type DevelopTypes = typeof DevelopTypes;

export default DevelopTypes;
