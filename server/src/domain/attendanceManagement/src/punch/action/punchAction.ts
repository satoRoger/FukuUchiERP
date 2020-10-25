import Employee from '../../entity/employee/employee';
import Timecard from '../../entity/timecard/Timecard';

export default interface PunchAction{
  punched: (employee: Employee) => Promise<Timecard>
}