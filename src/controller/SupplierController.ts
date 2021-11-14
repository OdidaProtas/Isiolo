import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import Supplier from "../entity/Supplier";
import retryRefactor from "../helpers/retryRefactor";

export class SupplierController {
  private supplierRepository = getRepository(Supplier);

  async save(request: Request, response: Response, next: NextFunction) {
    const storeId = request.params.id;
    const promise = this.supplierRepository.save({
      ...request.body,
      store: storeId,
    });
    const [data, e] = await retryRefactor(promise);
    if (data) return data;
    else return e;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const promise = this.supplierRepository.find({
      where: { store: { id: request.params.id } },
    });
    const [data, e] = await retryRefactor(promise);
    if (e) return e;
    else return data; 
  }
}
