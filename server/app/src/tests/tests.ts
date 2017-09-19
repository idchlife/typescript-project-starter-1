
import { Container } from 'typedi';
import User from '../entities/User';
import { Express } from "express";
import * as request from 'supertest';
import * as mocha from 'mocha';
import { assert, should } from "chai";
import bootstrap from "../config/bootstrap";

let app: Express;

before(async function() {
  app = await bootstrap();

  return true;
});

describe("Api testing", function userRegisteringAndAuthenticating() {
  console.log("Server started");

  let email: string = `${Math.random() * 10000}-email@email.com`;
  let password: string = "qwerty";
  let token: string;

  let userId: number;

  function authHeader(request: request.Request) {
    request.set("Authorization", `Bearer ${token}`);
  }
  
  it("should register master properly", function(done) {
    return request(app)
      .post("/api/auth/register")
      .send({
        email,
        password
      })
      .expect(200, done);
  });
});