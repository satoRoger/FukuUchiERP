import TimecardsQuery from '../InteractorObject/timecards/timecardsQuery';
import container from '../../../util/di/inversify.config';
import Types from '../../../util/di/types';
import TimecardRepository from '../../../domain/attendanceManagement/src/repository/timecard/timecardRepository';
import EmployeeFactory from '../../../domain/attendanceManagement/src/entity/employee/employeeFactory';
import TimecardAPIInterface from '../APIInterface/timecard/timecard';

export default async function GetTimecards(query: TimecardsQuery): Promise<TimecardAPIInterface[]> {
	const repository = container.get<TimecardRepository>(Types.TimecardRepository);

	const queryEmployee = query.userId ? new EmployeeFactory().createByRowId(query.userId) : undefined;
	const collection = await repository.search(queryEmployee, query.since, query.until);

	const result: TimecardAPIInterface[] = collection
		.getData()
		.map((timecard) => TimecardAPIInterface.fromDomainTimecard(timecard));

	return result;
}
