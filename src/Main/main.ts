import "reflect-metadata";
import Employee from "@/domain/attendanceManagement/employee/employee";
import { EmployeeId } from "@/domain/attendanceManagement/timecard/valueObjects";
import container from '../di/inversify.config';
import TimecardRepository from '@/domain/attendanceManagement/timecard/timecardRepository';
import Types from '@/di/types';


const employee: Employee = new Employee(new EmployeeId("ee"));
container.get<TimecardRepository>(Types.TimecardRepository);