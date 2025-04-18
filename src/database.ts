import "dotenv/config"
import { knex as knexSetup, Knex } from "knex"
import { env } from "./env"

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./db/migrations",
    extension: "ts",
  },
}

export const knex = knexSetup(config)
