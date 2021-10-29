import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import Store from "../entity/Store";
import retryRefactor from "../helpers/retryRefactor";

export class ProductController {
  private productRepository = getRepository(Product);
  private storeRepository = getRepository(Store);

  async save(request: Request, response: Response, next: NextFunction) {
    const findStore = this.storeRepository.findOne(request.params.id, {
      relations: ["owner"],
    });
    const [store, e] = await retryRefactor(findStore);
    if (e) return response.sendStatus(403).send("Could not authorize");
    const saveProduct = this.productRepository.save({
      ...request.body,
      store: store,
    });
    const [product, err] = await retryRefactor(saveProduct);
    console.log(product);
    if (product) return product;
    else return response.sendStatus(403).send("An error occured");
  }

  async byStore(request: Request, response: Response, next: NextFunction) {
    const promise = this.productRepository.find({
      store: { id: request.params.id },
    });
    const [products, err] = await retryRefactor(promise);
    if (products) return response.send(products);
    return response.sendStatus(403);
  }
}
