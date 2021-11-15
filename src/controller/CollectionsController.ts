import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Collections } from "../entity/Collections";
import retryRefactor from "../helpers/retryRefactor";

export class CollectionsController {
  private cR = getRepository(Collections);

  async save(req: Request, res: Response, next: NextFunction) {
    const [data, e] = await retryRefactor(this.cR.save(req.body));
    return data || res.sendStatus(403);
  }
  async all(req: Request, res: Response, next: NextFunction) {
    const [data, e] = await retryRefactor(
      this.cR.find({ where: { store: { id: req.params.id } } })
    );
    return data || res.sendStatus(403);
  }
}
