import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
} as const;

type DevelopTypes = typeof DevelopTypes;

export default DevelopTypes;
