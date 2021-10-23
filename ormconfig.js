const environment = "debug";
const ext = environment === "debug" ? "ts" : "js";
const app = environment === "debug" ? "src" : "build";

module.exports = {
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  database: "",
  logging: false,
  entities: [`${app}/entity/**/*.${ext}`],
  migrations: [`${app}/migration/**/*.${ext}`],
  subscribers: [`${app}/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: `${app}/entity`,
    migrationsDir: `${app}/migration`,
    subscribersDir: `${app}/subscriber`,
  },
};
