import { test, expect } from "vitest"
import request from "supertest"
import { app } from "../src/app"

test("POST /transactions", async () => {
  const response = await request(app.server).post("/transactions").send({
    title: "New transaction",
    amount: 5000,
    type: "credit",
  })
  expect(response.statusCode).toEqual(201)
})
