const env = process.env.NODE_ENV || "development";

export default {
  [env]: {
    username: "rian",
    password: "password333",
    database: "rian",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_migrations",
    logging: false
  }
};
