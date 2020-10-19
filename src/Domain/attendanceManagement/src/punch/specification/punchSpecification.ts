import Employee from "../../entity/employee/employee";
import PunchAction from '../action/punchAction';

export default interface PunchSpecification {
  punchable: (employee: Employee,action:PunchAction) => Promise<boolean>;
}
