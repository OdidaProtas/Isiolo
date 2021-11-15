import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vendor } from "../entity/Vendor";
import retryRefactor from "../helpers/retryRefactor";

export class VendorController {
  private vendorRepository = getRepository(Vendor);

  async save(request: Request, response: Response, next: NextFunction) {
    const promise = this.vendorRepository.save({
      ...request.body,
      store: request.params.id,
    });

    const [data, e] = await retryRefactor(promise);
    if (data) return data;
    else return e;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const promise = this.vendorRepository.find({
      where: { store: { id: request.params.id } },
    });

    const [data, e] = await retryRefactor(promise);
    if (data) return data;
    else return e;
  }
}
