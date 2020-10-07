import 'reflect-metadata';

const Types = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  SearchTimecard: Symbol.for("SearchTimecard"),
} as const;

export default Types;
