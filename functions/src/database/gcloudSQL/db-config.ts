import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "35.200.61.228",
  port: 5432,
  username: "postgres",
  password: "lmnopqst35",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: ["../entities/*.ts"],
};
export default dbConfig;
