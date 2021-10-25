import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import * as cors from "cors";
import MiddleWare from "./middleware/MiddleWare";

require("dotenv").config();

const middleWare = new MiddleWare();

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors("*" as any));

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        route.isAuthenticated ? middleWare.verifyToken : middleWare.pass,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.listen(process.env.PORT);

    console.log("Express server has started on port 3000");
  })
  .catch((error) => console.log(error));
