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
    if (product) return product;
    else return response.sendStatus(403).send("An error occured");
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const promise = this.productRepository.update(
      { id: request.params.id },
      request.body
    );
    const [res, e] = await retryRefactor(promise);
    if (res) return res;
    else return response.sendStatus(403).send(e);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const productToRemove = await this.productRepository.findOne(
      request.params.id
    );
    await this.productRepository.remove(productToRemove);
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
