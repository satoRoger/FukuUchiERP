import { Container } from 'inversify';
import 'reflect-metadata';
import  TimecardRepository  from '../domain/attendanceManagement/timecard/timecardRepository';
import RepositoryOnMemory from '../infrastructure/repository/repositoryOnMemory';
import SearchTimecard from '../usecase/timecard/searchTimecard';
import Types from './types';


const container = new Container();
container.bind<TimecardRepository>(Types.TimecardRepository).to(RepositoryOnMemory);
container.bind<SearchTimecard>(Types.SearchTimecard).to(SearchTimecard);

export default container;
