import "reflect-metadata";

const Types = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardFactory: Symbol.for("TimecardFactory"),
  SearchTimecard: Symbol.for("SearchTimecard"),
  TransferToTimecardDTO: Symbol.for("TransferToTimecardDTO"),
} as const;

export default Types;
