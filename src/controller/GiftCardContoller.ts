import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { GiftCard } from "../entity/GiftCard";
import retryRefactor from "../helpers/retryRefactor";

export class GiftCardController {
  private gR = getRepository(GiftCard);

  async save(req: Request, res: Response, next: NextFunction) {
    const [data, e] = await retryRefactor(this.gR.save(req.body));
    return data || res.sendStatus(403);
  }

  async all(req: Request, res: Response, nsxt: NextFunction) {
    const [data, e] = await retryRefactor(
      this.gR.find({ where: { store: { id: req.params.id } } })
    );
    return data || res.sendStatus(403);
  }
}
