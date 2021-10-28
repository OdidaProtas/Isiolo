import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Store from "../entity/Store";
import { StoreProfile } from "../entity/StoreProfile";
import retryRefactor from "../helpers/retryRefactor";

export default class StoreProfileController {
  private profileRepository = getRepository(StoreProfile);
  private storeRepository = getRepository(Store);

  async save(request: Request, response: Response, next: NextFunction) {
    const getStore = this.storeRepository.findOne(request.params.id);
    const [store, e] = await retryRefactor(getStore);
    if (e) return response.status(403).send("Store not found");
    const promise = this.profileRepository.save({
      ...request.body,
      store: store,
    });
    const [res, err] = await retryRefactor(promise);

    if (res) return res;
    return response.status(403).send(err);
  }
}
