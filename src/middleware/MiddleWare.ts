 import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export default class MiddleWare {
  TOKEN_KEY = process.env.TOKEN_KEY;

  async verifyToken(request: Request, response: Response, next: NextFunction) {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers["access_token"];

    if (!token) {
      return response
        .status(403)
        .send("A token is required for authentication");
    }

    try {
      const decoded = jwt.verify(token, "hehe");
      request["user"] = decoded;
    } catch (err) {
      return response.status(401).send("Invalid Token");
    }
    return next();
  }

  async pass(request: Request, response: Response, next: NextFunction) {
    next();
  }
}
