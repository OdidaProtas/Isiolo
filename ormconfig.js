const environment = process.env.ENVIRONMENT;
const ext = environment === "debug" ? "ts" : "js";
const app = environment === "debug" ? "src" : "build";

module.exports = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
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
