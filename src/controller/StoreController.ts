import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import retryRefactor from "../helpers/retryRefactor";
import Store from "../entity/Store";

export class StoreController {
  private storeRepository = getRepository(Store);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.storeRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.storeRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const promise = this.storeRepository.save(request.body);
    const [res, err] = await retryRefactor(promise);
    if (res) return res;
    return response.status(403).send(err.driverError.detail);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let storeToRemove = await this.storeRepository.findOne(request.params.id);
    await this.storeRepository.remove(storeToRemove);
  }
}
