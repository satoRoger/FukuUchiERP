import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardsResponse: Symbol.for("TimecardsResponse"),
} as const;

type DevelopTypes = typeof DevelopTypes;

export default DevelopTypes;
