import "reflect-metadata";
const TestTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  InvalidTimecardRepository: Symbol.for("InvalidTimecardRepository"),
} as const;

export default TestTypes;
