import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Customer from "../entity/Customer";
import retryRefactor from "../helpers/retryRefactor";

export class CustomerController {
  private cc = getRepository(Customer);

  async save(req: Request, res: Response, next: NextFunction) {
    const [data, e] = await retryRefactor(this.cc.save(req.body));
    return data || res.sendStatus(403);
  }

  async all(req: Request, res: Response, next: NextFunction) {
    const [data, e] = await retryRefactor(
      this.cc.find({ where: { store: { id: req.params.id } } })
    );
    return data || res.sendStatus(403);
  }
}
