import fastify from "fastify"
import { knex } from "./database"
import { randomUUID } from "node:crypto"
import { env } from "./env"

const app = fastify({
  logger: true,
})

app.get("/hello", async () => {
  // const transactions = await knex("transactions")
  //   .insert({
  //     id: randomUUID(),
  //     title: "New transaction",
  //     amount: 5000,
  //   })
  //   .returning("*")
  // return transactions

  const transactions = await knex("transactions").select("*")
  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333")
  })
