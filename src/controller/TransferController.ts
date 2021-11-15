import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Transfer } from "../entity/Transfer";
import retryRefactor from "../helpers/retryRefactor";

export class TransferController {
  private tf = getRepository(Transfer);

  async save(req: Request, res: Response, next: NextFunction) {
    const self = this.tf;
    const [data, e] = await retryRefactor(self.save(req.body));
    return data ? data : e;
  }

  async all(req: Request, res: Response, next: NextFunction) {
    const self = this.tf;
    const [data, e] = await retryRefactor(
      self.find({ where: { store: { id: req.params.id } } })
    );
    return data ? data : e;
  }
}
