import PunchSpecification from "./punchSpecification";

export default class PunchSpecificationFactory {
  getAttendance: () => PunchSpecification = () => {
    return new PunchSpecification();
  };
  getLeavework: () => PunchSpecification;
  getTakebreak: () => PunchSpecification;
  getEndbreak: () => PunchSpecification;
}
