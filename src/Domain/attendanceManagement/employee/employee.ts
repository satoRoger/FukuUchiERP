import { Result } from "@/common/result";
import { Coordinate, EmployeeId } from "../timecard/valueObjects";
import { ErrorMessage } from "../../../common/message";
import Timecard from "../timecard/timecard";
import TimecardRepository from "../timecard/timecardRepository";
import Types from "@/di/types";
import { inject } from "inversify";
import TimecardFactory from "../timecard/timecardFactory";
import container from '../../../di/inversifyDevelop.config';

export default class Employee {
  private id: EmployeeId;

  constructor(id: EmployeeId) {
    this.id = id;
  }

  getId: () => EmployeeId = () => {
    return this.id;
  };

  attendance: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<Result<Timecard, ErrorMessage>> = (
    punchDate: Date,
    coordinate: Coordinate
  ) => {
    const tiemcardFactory: TimecardFactory = container<>;
    const punchRepository: TimecardRepository;

    const timecard = tiemcardFactory.create();
    punchRepository
      .save(timecard)
      .then((_) => {})
      .catch((errorMessage) => {});
  };

  leaveWork: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<Result<Timecard, ErrorMessage>>;

  takeBreak: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<Result<Timecard, ErrorMessage>>;

  endBreak: (
    punchDate: Date,
    coordinate: Coordinate
  ) => Promise<Result<Timecard, ErrorMessage>>;
}
