import "reflect-metadata";

const TestTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  InvalidTimecardRepository: Symbol.for("InvalidTimecardRepository"),
} as const;

type TestTypes = typeof TestTypes;

export default TestTypes;
