import "reflect-metadata";

const TestTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardFailRepository: Symbol.for("TimecardFailRepository"),
} as const;

export default TestTypes;
