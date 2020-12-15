import { DateTime } from "luxon";
import Employee from "../../../domain/attendanceManagement/src/entity/employee/employee";
import TimecardDomainEntity from "../../../domain/attendanceManagement/src/entity/timecard/Timecard";
import TimecardCollection from "../../../domain/attendanceManagement/src/entity/timecard/timecardCollection";
import TimecardRepository from "../../../domain/attendanceManagement/src/repository/timecard/timecardRepository";
import { createConnection, getRepository } from "typeorm";
import dbConfig from "../db-config";
import logger from "../../../util/logger/logger";
import TimecardDBEntity from "../../entities/timecard";
import TimecardFactory from "../../../domain/attendanceManagement/src/entity/timecard/timecardFactory";
import EmployeeId from "../../../domain/attendanceManagement/src/valueObject/employeeId";
import { injectable } from "inversify";

@injectable()
export default class TimecardRepositoryGDB implements TimecardRepository {
  async save(timecard: TimecardDomainEntity): Promise<TimecardDomainEntity> {
    await createConnection(dbConfig).then(async (connection) => {
      try {
        const record_timecard = new TimecardDBEntity(
          timecard.punchDate.toSQLDate(),
          timecard.cardtype,
          timecard.punchEmployeeId.value,
          timecard.coordinate?.longitude(),
          timecard.coordinate?.latitude()
        );

        await connection.manager.save(record_timecard);
      } catch (error) {
        logger.error.error("Faild:" + error);
      } finally {
        await connection.close();
      }
    });
    return timecard;
  }
  async search(
    employee: Employee,
    from: DateTime,
    to: DateTime
  ): Promise<TimecardCollection> {
    const collection = new TimecardCollection();
    await createConnection(dbConfig).then(async (connection) => {
      try {
        const repository = getRepository(TimecardDBEntity);
        const result = repository
          .createQueryBuilder("timecard")
          .where(`timecard.userId = ${employee.id.value}`)
          .andWhere(`${from.toSQLDate} <= timecard.date`)
          .andWhere(`timecard.date <= ${to.toSQLDate}`)
          .getMany();

        (await result).forEach((entity) => {
          if (entity.id && entity.cardType) {
            const record_timecard = new TimecardFactory().createTimecard(
              new EmployeeId(entity.userId),
              entity.cardType,
              DateTime.fromSQL(entity.date),
              entity.latitude,
              entity.longitude
            );
            collection.add(record_timecard);
          }
        });
      } finally {
        connection.close();
      }
    });
    return collection;
  }
}
