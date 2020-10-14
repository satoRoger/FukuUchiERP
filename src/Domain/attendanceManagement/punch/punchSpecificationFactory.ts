import PunchSpecification from "./punchSpecification";

export default class PunchSpecificationFactory {
  getAttendance: () => PunchSpecification = () => {
    return new PunchSpecification();
  };
  getLeavework: () => PunchSpecification = () => {
    return new PunchSpecification();
  };
  getTakebreak: () => PunchSpecification = () => {
    return new PunchSpecification();
  };
  getEndbreak: () => PunchSpecification = () => {
    return new PunchSpecification();
  };
}
