
import 'reflect-metadata';
import container from '../di/inversify.config';
import types from '../di/types';
import SearchTimecard from '../usecase/timecard/searchTimecard';

const searchTimecard: SearchTimecard =container.get<SearchTimecard>(types.SearchTimecard);
searchTimecard.tess();