import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { ProductMedia } from "../entity/ProductMedia";
import retryRefactor from "../helpers/retryRefactor";

export default class ProductMediaController {
  private productRepository = getRepository(Product);
  private mediaRepository = getRepository(ProductMedia);

  async all(request: Request, response: Response, next: NextFunction) {
    const promise = this.mediaRepository.find({
      product: { id: request.params.id },
    });
    const [media, e] = await retryRefactor(promise);
    if (media) return media;
    else return response.sendStatus(403).send("An error occured");
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const promise = this.mediaRepository.save({
      ...request.body,
      product: request.params.id,
    });
    const [media, err] = await retryRefactor(promise);
    if (media) return media;
    else return err;
  }
}
