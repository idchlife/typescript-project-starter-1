import "reflect-metadata";
import { PassportLocalStrategyFunction } from "../services/security/security-tools";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection, useContainer as useContainerTypeORM } from "typeorm";
import { Container } from "typedi";
import { useContainer as useContainerRoutingControllers, useExpressServer } from "routing-controllers";
import * as passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as morgan from "morgan";
import database from "./database";

export default async function(): Promise<express.Express> {
  const app = express();

  app.use(morgan("combined"));

  useExpressServer(app, {
    controllers: [
      __dirname + "/../controllers/*.js"
    ]
  })

  app.use(express.static(__dirname + "/../../../assets"));

  app.use(bodyParser.json());

  useContainerTypeORM(Container);
  useContainerRoutingControllers(Container);

  passport.use(new LocalStrategy(
    PassportLocalStrategyFunction
  ));

  // Database configuration
  await createConnection({
    type: "postgres",
    host: database.host,
    password: database.password,
    username: database.username,
    database: database.database,
    autoSchemaSync: true
  });

  return app;
}