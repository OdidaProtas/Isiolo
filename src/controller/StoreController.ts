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
    const promise = this.storeRepository.findOne(request.params.id, {
      relations: ["profile"],
    });
    const [res] = await retryRefactor(promise);
    if (res) return res;
    else return response.sendStatus(404).send("An error occured");
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const promise = this.storeRepository.save({
      ...request.body,
      owner: request["user"],
    });
    const [res, err] = await retryRefactor(promise);
    if (res) return res;
    return response.status(403).send(err.driverError.detail);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let storeToRemove = await this.storeRepository.findOne(request.params.id);
    const promise = this.storeRepository.remove(storeToRemove);
    const [res, e] = await retryRefactor(promise);
    if (res) return res;
    return response.sendStatus(404);
  }

  async byName(request: Request, response: Response, next: NextFunction) {
    let promise = this.storeRepository.findOne({ name: request.params.name });
    const [store, e] = await retryRefactor(promise);
    if (store) return false;
    return true;
  }

  async byOwner(request: Request, response: Response, next: NextFunction) {
    const promise = this.storeRepository.find({
      where: { owner: request["user"] },
    });
    const [stores, err] = await retryRefactor(promise);
    if (stores) return response.send(stores);
    return response.sendStatus(403);
  }
}
