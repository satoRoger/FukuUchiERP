import 'reflect-metadata';

const Types = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardFactory:Symbol.for("TimecardFactory"),
  SearchTimecard: Symbol.for("SearchTimecard"),
} as const;

export default Types;
