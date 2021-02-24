import { response } from 'express';
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("Surveys", async()=>{
  beforeAll(async()=>{
    const connection = await createConnection();
    await connection.runMigrations();
  })

  it("Should be able to create a survey", async ()=>{
    const response = await request(app).post('/surveys')
    .send({
      title: "Example",
      description: "Description example"
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all surveys", async()=>{
    await request(app).post("/surveys").send({
      title: "Title example 2",
      description: "Description Example 2"
    });

    const response = await request(app).get("/surveys");

    expect(response.body.length).toBe(2);

  })

  
});