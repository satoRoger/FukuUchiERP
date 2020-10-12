import "reflect-metadata";

const DevelopTypes = {
  TimecardRepository: Symbol.for("TimecardRepository"),
  TimecardFactory: Symbol.for("TimecardFactory"),
  SearchTimecard: Symbol.for("SearchTimecard"),
  TransferToTimecardDTO: Symbol.for("TransferToTimecardDTO"),
} as const;

export default DevelopTypes;
